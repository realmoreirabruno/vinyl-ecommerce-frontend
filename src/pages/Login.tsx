import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/UseAuth";
import Form from "../components/Form";

export default function Login() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    isAuthenticated && navigate("/dashboard");
  }, [isAuthenticated]);

  return (
    <Form
      title="Acesse sua conta"
      buttonText="Entrar"
      bottomText={{
        text: "Ainda não tem uma conta?",
        linkText: "Inscrever-se",
        url: "signup",
      }}
    />
  );
}