import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/UseAuth";

export default function PrivateRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    isAuthenticated != undefined &&
    (isAuthenticated ? <Outlet /> : <Navigate to="/" />)
  );
}