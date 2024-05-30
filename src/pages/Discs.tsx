import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { albumApi } from "../services/apiService";
import LoggedPagesTopBar from "../components/topBar/LoggedPagesTopBar";
import CardList from "../components/CardList";
import albums from "../assets/albums.svg";
import value from "../assets/value.svg";

interface User {
  id: number;
  email: string;
  password: string;
}

interface Disc {
  id: number;
  name: string;
  artistName: string;
  idSpotify: string;
  imageUrl: string;
  value: number;
  users: User;
}

export default function Discs() {
  const [discs, setDiscs] = useState<Disc[]>([]);
  const [investedValue, setInvestedValue] = useState<string>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUserDiscs() {
      await albumApi
        .get("/my-collection")
        .then((response) => {
          let value = 0;
          response.data.map((disc: Disc) => {
            value += disc.value;
          });
          value = Number(value.toFixed(2));

          setDiscs(response.data);
          setInvestedValue(value.toString().replace(".", ","));
          setLoading(false);
        })
        .catch(() => {
          toast.error(
            "Erro ao buscar álbums. Por favor, recarregue a página."
          );
        });
    }

    getUserDiscs();
  }, []);

  return (
    <div className="h-screen bg-[#19181F]">
      <LoggedPagesTopBar />

      <div className="bg-[#19181F]">
        <div className="w-[80%] mx-auto text-white">
          <h1 className="mt-10 mb-6 font-lato font-bold text-3xl text-white max-md:text-center md:mt-[100px] md:mb-12 md:text-[48px]">
            Meus Discos
          </h1>

          {!loading && (
            <div className="flex max-md:flex-col max-md:items-center mb-10">
              <div className="flex items-center w-[300px] p-5 max-md:mb-4 rounded-[10px] text-black bg-white md:mr-5">
                <div className="flex justify-center items-center size-12 mr-4 rounded-full bg-black">
                  <img src={albums} className="size-8" />
                </div>

                <div className="font-inter">
                  <p className="font-semibold text-lg max-md:mb-1 md:mb-[10px]">
                    Total de Álbuns
                  </p>
                  <p className="text-2xl md:text-[32px]">{discs.length}</p>
                </div>
              </div>

              <div className="flex items-center w-[300px] p-5 rounded-[10px] text-black bg-white">
                <div className="flex justify-center items-center size-12 mr-4 rounded-full bg-black">
                  <img src={value} className="size-8" />
                </div>

                <div className="font-inter">
                  <p className="font-semibold text-lg max-md:mb-1 md:mb-[10px]">
                    Valor Investido
                  </p>
                  <p className="text-2xl md:text-[32px]">R$ {investedValue}</p>
                </div>
              </div>
            </div>
          )}
          {discs.length > 0 ? (
            <CardList discs={discs} loading={loading} />
          ) : (
            <h2 className="text-[20px] md:text-2xl">
              Você ainda não adquiriu nenhum álbum.
            </h2>
          )}
        </div>
      </div>
    </div>
  );
}