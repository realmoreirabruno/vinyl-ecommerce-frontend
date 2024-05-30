import { UserModel } from "@/models/UserModel";
import { albumApi, userApi } from "@/services/apiService";
import { createContext, useCallback, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

interface AuthContextModel extends UserModel{
    isAuthenticated: boolean,
    login: (email: string, password: string) => Promise<string | void>;
    logout: () => void;
}

interface Props {
    children: React.ReactNode
}

export const AuthContext = createContext({} as AuthContextModel);

export const AuthProvider: React.FC<Props> = ({children}) => {
    const [userData, setUserData] = useState<UserModel>();
    const[isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        const data: UserModel = JSON.parse(localStorage.getItem('@Auth.Data') || "{}")
        if(data.id){
            setIsAuthenticated(true);
            setUserData(data);
        }
        Logout();
        
        //se o data for vazio, fazer o logOut, sera o estado com nulo fazendo com que o isAuthenticated torne-se falso
    }, [])

    const Login = useCallback(async (email: string, password: string) => {
        const respAuth = await userApi.post('/users/auth', {email, password});

        if(respAuth instanceof Error) {
            return respAuth.message;
        }

        localStorage.setItem('@Auth.Token', JSON.stringify(respAuth.data.token));

        
        userApi.defaults.headers.common.Authorization = `Basic ${respAuth.data.token}`;
        albumApi.defaults.headers.common.Authorization = `Basic ${respAuth.data.token}`;
        const respUserInfo = await userApi.get(`/users/${respAuth.data.id}`);

        if(respUserInfo instanceof Error) {
            return respUserInfo.message;
        }

        localStorage.setItem('@Auth.Data', JSON.stringify(respUserInfo.data));
        setUserData(respUserInfo.data);
        setIsAuthenticated(true);
    }, []);

    const Logout = useCallback(() => {
        localStorage.removeItem('@Auth.Data');
        setUserData(undefined);
        setIsAuthenticated(false);
        return <Navigate to='/' />;
    }, [])

    return(
        <AuthContext.Provider value={{isAuthenticated: isAuthenticated, ...userData, login: Login, logout: Logout}}>
            { children }
        </AuthContext.Provider>
    )
}