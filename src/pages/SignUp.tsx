import Form from "../components/Form";

export default function SignUp() {
  return (
    <Form
      title="Criar conta"
      nameInput
      buttonText="Criar conta"
      bottomText={{
        text: "Já tem uma conta?",
        linkText: "Entrar",
        url: "login",
      }}
    />
  );
}