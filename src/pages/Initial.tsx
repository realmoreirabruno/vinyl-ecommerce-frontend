import { Link } from "react-router-dom";
import { useAuth } from "../hooks/UseAuth";
import TopBarWrapper from "../components/topBar/TopBarWrapper";
import Background from "../components/Background";

export default function Initial() {
  const { isAuthenticated } = useAuth();

  return (
    <Background page="initial">
      <TopBarWrapper>
        <div className="flex max-md:flex-col max-md:w-full">
          <Link
            to={isAuthenticated ? "/dashboard" : "/login"}
            className="flex justify-center items-center w-[200px] h-10 rounded-[32px] font-semibold text-lg text-white bg-[#010B0F] transition hover:opacity-80 max-md:mb-3 max-md:w-full md:h-12 md:mr-3 md:text-xl"
          >
            Entrar
          </Link>

          <Link
            to="/signup"
            className="flex justify-center items-center w-[200px] h-10 rounded-[32px] font-semibold text-lg text-[010B0F] bg-[#9EE2FF] transition md:h-12 md:text-xl max-md:w-full hover:opacity-80"
          >
            Inscrever-se
          </Link>
        </div>
      </TopBarWrapper>

      <div className="relative max-w-[700px] mx-[10%] mt-12 sm:mt-20 xl:mt-[224px]">
        <h1 className="text-4xl leading-[45px] text-white font-semibold md:text-[64px] md:leading-[78px]">
          A história da música não pode ser esquecida!
        </h1>

        <p className="w-[90%] text-xl text-white mt-6 mb-14 md:text-2xl">
          Crie já sua conta e curta os sucessos que marcaram os tempos no Vinil.
        </p>

        <Link
          to="/signup"
          className="px-10 py-4 rounded-[32px] font-semibold text-xl text-[010B0F] bg-[#9EE2FF] transition hover:opacity-80 md:px-16 md:py-6"
        >
          Inscrever-se
        </Link>
      </div>
    </Background>
  );
}