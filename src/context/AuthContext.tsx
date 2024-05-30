import { createContext, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { albumApi, userApi } from "../services/apiService";
import { UserData } from "../types/UserData";

interface AuthContext {
  isAuthenticated?: boolean;
  signUp: (userData: UserData) => Promise<string | void>;
  login: (userData: UserData) => Promise<string | void>;
  logout: () => void;
}

interface Props {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as AuthContext);

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>();
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("@Auth.Data");

    if (data) {
      setIsAuthenticated(JSON.parse(data));

      userApi.defaults.headers.common.Authorization = `Basic ${
        JSON.parse(data).token
      }`;

      albumApi.defaults.headers.common.Authorization = `Basic ${
        JSON.parse(data).token
      }`;
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const signUp = useCallback(async (userData: UserData) => {
    await userApi
      .post("/users/create", userData)
      .then(() => {
        toast.success("Conta criada com sucesso!");
        login({ email: userData.email, password: userData.password });
      })
      .catch(() => {
        toast.error(
          "O email informado já está sendo utilizado por outro usuário."
        );
      });
  }, []);

  const login = useCallback(async (userData: UserData) => {
    await userApi
      .post("/users/auth", userData)
      .then(async (response) => {
        userApi.defaults.headers.common.Authorization = `Basic ${response.data.token}`;
        albumApi.defaults.headers.common.Authorization = `Basic ${response.data.token}`;

        const userInfo = (await userApi.get(`/users/${response.data.id}`)).data;
        userInfo.token = response.data.token;

        toast.success("Login realizado com sucesso!");
        localStorage.setItem("@Auth.Data", JSON.stringify(userInfo));
        setIsAuthenticated(true);
        navigate("/dashboard");
      })
      .catch(() => {
        toast.error(
          "Email ou senha inválidos. Por favor, confira os dados ou se cadastre antes de realizar o login."
        );
      });
  }, []);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    localStorage.removeItem("@Auth.Data");
    navigate("/");
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, signUp, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};