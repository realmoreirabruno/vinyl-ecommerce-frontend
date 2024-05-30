import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "../../hooks/UseAuth";
import TopBarWrapper from "./TopBarWrapper";
import profile from "../../assets/profile.jpg";
import log_out from "../../assets/log_out.svg";

export default function LoggedPagesTopBar() {
  const { logout } = useAuth();

  return (
    <TopBarWrapper>
      <div className="flex items-center mt-3">
        <div className="flex text-center text-white max-md:flex-col max-md:mr-8">
          <Link
            to="/my-discs"
            className={`px-3 py-2 rounded-full text-[18px] transition hover:bg-slate-400 ${
              window.location.pathname === "/my-discs" && "font-extrabold"
            }`}
          >
            Meus Discos
          </Link>
          <Link
            to=""
            className="px-3 py-2 rounded-full text-[18px] md:mx-9 transition hover:bg-slate-400"
          >
            Carteira
          </Link>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <img
              src={profile}
              className="size-[50px] rounded-full border-[2px] border-[#9EE2FF] md:size-[60px]"
            />
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuItem className="hover:bg-slate-300" onClick={logout}>
              <img src={log_out} className="mr-[6px]" />
              Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </TopBarWrapper>
  );
}