import { AlbumModel } from "../types/AlbumModel";
import close from "../assets/close.svg";

interface Props {
  album: AlbumModel;
  buyAlbum: (album: AlbumModel) => void;
  setAlbumDetails: React.Dispatch<React.SetStateAction<AlbumModel | null>>;
}

export default function AlbumDetails({
  album,
  buyAlbum,
  setAlbumDetails,
}: Props) {
  const releaseDate = album.releaseDate.split("-");

  return (
    <div className="absolute top-0 flex justify-center items-center w-screen h-screen backdrop-brightness-50">
      <div className="flex flex-col max-md:w-5/6 max-w-[400px] md:flex-row md:max-w-[700px]">
        <img
          src={album.images[0].url}
          className="object-cover max-md:rounded-t-[20px] md:rounded-l-[20px] md:max-w-[50%]"
        />

        <div className="flex flex-col p-3 text-center bg-white max-md:rounded-b-[20px] md:rounded-r-[20px]">
          <img
            src={close}
            className="self-end cursor-pointer md:mb-1"
            onClick={() => setAlbumDetails(null)}
          />

          <h1
            className={`mb-2 text-[20px] text-center leading-8 font-lato font-bold md:text-[32px] md:mb-4 md:leading-10 ${
              !album.name.includes(" ") && "break-all"
            }`}
          >
            {album.name}
          </h1>

          <p className="mb-2 font-lato text-center md:mb-3">
            <span className="font-semibold">
              {album.artists.length > 1 ? "Artistas: " : "Artista: "}
            </span>

            {album.artists.map((artist, index) => {
              return index !== album.artists.length - 1
                ? artist.name + ", "
                : artist.name;
            })}
          </p>

          <p className="mb-2 font-lato max-md:text-center md:mb-3">
            <span className="font-semibold">Preço: </span>
            R$ {album.value}
          </p>

          <p className="mb-2 font-lato text-center md:mb-4">
            <span className="font-semibold">Data de lançamento: </span>
            {`${releaseDate[2]}/${releaseDate[1]}/${releaseDate[0]}`}
          </p>

          <p className="mb-3 font-lato text-center md:mb-4">
            <span className="font-semibold">Link:</span>{" "}
            <a
              href={album?.externalUrls.externalUrls.spotify}
              target="blank"
              className="break-all"
            >
              {album?.externalUrls.externalUrls.spotify}
            </a>
          </p>

          <div className="flex justify-center h-full">
            <button
              className="self-end w-[90%] py-2 text-lg font-medium rounded-[40px] text-white bg-[#FBBC05] cursor-pointer md:text-[22px] hover:opacity-80"
              onClick={() => buyAlbum(album)}
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}