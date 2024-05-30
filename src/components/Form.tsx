import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/UseAuth";
import { UserData } from "../types/UserData";
import Background from "./Background";
import Input from "./FormInput";
import logo from "../assets/logo.svg";
import loadingIcon from "../assets/loading.svg";

interface BottomText {
  text: string;
  linkText: string;
  url: string;
}

interface Props {
  title: string;
  nameInput?: boolean;
  buttonText: string;
  bottomText: BottomText;
}

export default function Form({
  title,
  buttonText,
  bottomText,
  nameInput,
}: Props) {
  const [userDataInput, setUserDataInput] = useState<UserData>({} as UserData);
  const [loading, setLoading] = useState<boolean>(false);
  const { signUp, login } = useAuth();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    nameInput ? await signUp(userDataInput) : await login(userDataInput);
    setLoading(false);
  }

  return (
    <Background page="initial" hasForm>
      <div className="relative flex flex-col w-[85%] max-w-[544px] rounded-3xl bg-[#FCFCFC]">
        <div className="flex flex-col items-center mt-8">
          <img src={logo} />
          <h1 className="mb-6 mt-4 text-2xl font-medium text-[#100F14] md:text-[32px]">
            {title}
          </h1>

          <form
            className="flex flex-col w-[90%] max-w-[400px]"
            onSubmit={handleSubmit}
          >
            {nameInput && (
              <Input
                label="Nome Completo"
                type="text"
                setUserDataInput={setUserDataInput}
              />
            )}

            <Input
              label="Email"
              type="email"
              setUserDataInput={setUserDataInput}
            />

            <Input
              label="Senha"
              type="password"
              setUserDataInput={setUserDataInput}
            />

            <button
              type="submit"
              disabled={loading}
              className={`flex justify-center items-center h-16 rounded-[40px] bg-[#19181F] text-[18px] text-white transition md:text-[22px] hover:opacity-80 ${
                loading && "opacity-80"
              }`}
            >
              {loading && (
                <img src={loadingIcon} className="size-8 animate-spin mr-1" />
              )}
              {loading
                ? nameInput
                  ? "Criando conta..."
                  : "Entrando..."
                : buttonText}
            </button>
          </form>

          <p className="w-5/6 mt-8 mb-5 text-center text-[#686677]">
            {bottomText.text}{" "}
            <Link
              to={loading ? "" : `/${bottomText.url}`}
              className={`font-semibold underline text-[#100F14] cursor-pointer transition hover:opacity-80 ${
                loading && "opacity-80"
              }`}
            >
              {bottomText.linkText}
            </Link>
          </p>
        </div>
      </div>
    </Background>
  );
}