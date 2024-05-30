import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

export default function TopBarWrapper({ children }: PropsWithChildren) {
  return (
    <nav className="flex max-md:flex-col justify-between items-center py-4 px-[5%] bg-[#FFFFFF4D] backdrop-blur-xl">
      <Link to="/dashboard">
        <div className="flex items-center max-sm:mb-2 max-md:mb-4">
          <img src={logo} className="mr-[7px]" />
          <p className="font-comicneue font-bold text-white md:text-2xl">
            BootPlay
          </p>
        </div>
      </Link>
      {children}
    </nav>
  );
}