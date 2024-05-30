import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { albumApi } from "../services/apiService";
import { AlbumModel } from "../types/AlbumModel";
import Background from "../components/Background";
import LoggedPagesTopBar from "../components/topBar/LoggedPagesTopBar";
import Card from "../components/Card";
import CardList from "../components/CardList";
import AlbumDetails from "../components/AlbumDetails";
import search from "../assets/search.svg";

export default function Dashboard() {
  const [albums, setAlbums] = useState<AlbumModel[]>([]);
  const [showTrends, setShowTrends] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const [albumDetails, setAlbumDetails] = useState<AlbumModel | null>(null);
  const [searchInput, setSearchInput] = useState<string | null>(null);
  const [lastSearch, setLastSearch] = useState<string | null>(null);

  useEffect(() => {
    async function getTrends() {
      await albumApi
        .get(`/all?searchText=pagode`)
        .then((response) => {
          setAlbums(response.data);
          setLoading(false);
        })
        .catch(() => {
          toast.error("Erro ao buscar álbums. Por favor, recarregue a página.");
        });
    }

    getTrends();
  }, []);

  async function searchAlbums() {
    if (searchInput === "" || searchInput === lastSearch || loading) return;

    setLoading(true);
    showTrends && setShowTrends(false);

    await albumApi
      .get(`/all?searchText=${searchInput}`)
      .then((response) => {
        setAlbums(response.data);
        setLastSearch(searchInput);
        setLoading(false);
      })
      .catch(() => {
        toast.error(
          "Erro ao buscar álbums. Por favor, recarregue a página e tente novamente."
        );
      });
  }

  async function buyAlbum(album: AlbumModel) {
    const artists = album.artists.map((artist) => {
      return artist.name;
    });

    const albumData = {
      name: album.name,
      idSpotify: album.id,
      artistName: artists.length > 1 ? artists.join(", ") : artists[0],
      imageUrl: album.images[0].url,
      value: album.value,
    };

    await albumApi
      .post("/sale", albumData)
      .then(() => {
        toast.success("Álbum adquirido com sucesso!");
        setAlbumDetails(null);
      })
      .catch(() => {
        toast.error(
          "Erro ao comprar álbum. Por favor, recarregue a página e tente novamente."
        );
      });
  }

  return (
    <>
      <Background page="dashboard">
        <LoggedPagesTopBar />

        <div className="relative max-w-[504px] mx-[10%] mt-12 sm:mt-20 xl:mt-[224px]">
          <h1 className="mb-5 text-3xl leading-[40px] text-white font-semibold md:text-[40px]">
            A história da música não pode ser esquecida!
          </h1>

          <p className="mb-20 font-lato text-xl text-white md:text-2xl">
            Sucessos que marcaram o tempo!!!!
          </p>
        </div>

        <div className="h-10 mt-[88px] bg-gradient-to-b from-[#19181f23] via-[#19181fd8] to-[#19181F]" />

        <div className="h-[80%] bg-[#19181F] pt-[10px] xl:h-[65%]">
          <div className="flex items-center w-3/4 max-w-[448px] h-14 mx-auto px-2 border border-[#CBCAD7] rounded-xl">
            <input
              id="search"
              type="text"
              className="w-full bg-transparent text-white focus:outline-none"
              autoComplete="off"
              onChange={(event) => setSearchInput(event.target.value)}
              onKeyUp={(event) => event.key === "Enter" && searchAlbums()}
            />

            <img
              src={search}
              className="size-6 mr-2 cursor-pointer"
              onClick={searchAlbums}
            />
          </div>

          <div className="px-[5%] mt-10 mx-auto max-w-screen-[1180px] font-lato text-[#FCFCFC] bg-[#19181F]">
            {showTrends ? (
              <>
                <h1 className="mb-6 font-bold text-3xl md:text-[40px]">
                  Trends
                </h1>

                {loading ? (
                  <h2 className="text-2xl md:text-[20px]">
                    Carregando álbuns...
                  </h2>
                ) : (
                  <div className="flex py-4 overflow-hidden group">
                    <div
                      className={`flex gap-8 animate-loop-scroll group-hover:paused ${
                        albumDetails && "paused"
                      }`}
                    >
                      {albums.map((album) => {
                        return (
                          <div key={album.id}>
                            <Card
                              cardInfo={{
                                name: album.name,
                                value: album.value,
                                imageUrl: album.images[0].url,
                              }}
                              album={album}
                              setAlbumDetails={setAlbumDetails}
                            />
                          </div>
                        );
                      })}
                    </div>

                    <div
                      className={`flex gap-8 ml-[32px] animate-loop-scroll group-hover:paused ${
                        albumDetails && "paused"
                      }`}
                      aria-hidden="true"
                    >
                      {albums.map((album) => {
                        return (
                          <div key={album.id}>
                            <Card
                              cardInfo={{
                                name: album.name,
                                value: album.value,
                                imageUrl: album.images[0].url,
                              }}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </>
            ) : albums.length === 0 && lastSearch !== null ? (
              <h2 className="text-[20px] md:text-2xl">
                Nenhum álbum encontrado.
              </h2>
            ) : (
              <CardList
                albums={albums}
                loading={loading}
                setAlbumDetails={setAlbumDetails}
              />
            )}
          </div>
        </div>
      </Background>
      {albumDetails && (
        <AlbumDetails
          album={albumDetails}
          buyAlbum={buyAlbum}
          setAlbumDetails={setAlbumDetails}
        />
      )}
    </>
  );
}