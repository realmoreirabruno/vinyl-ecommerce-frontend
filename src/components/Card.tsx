import { AlbumModel } from "../types/AlbumModel";

interface CardInfo {
  name: string;
  value: number;
  imageUrl: string;
}

interface Props {
  cardInfo: CardInfo;
  album?: AlbumModel;
  setAlbumDetails?: React.Dispatch<React.SetStateAction<AlbumModel | null>>;
}

export default function Card({ cardInfo, album, setAlbumDetails }: Props) {
  return (
    <div
      className="size-60 mb-5 mx-auto rounded-md overflow-hidden cursor-pointer transition shadow-album hover:scale-110"
      onClick={() => album && setAlbumDetails && setAlbumDetails(album)}
    >
      <div className="absolute flex flex-col justify-center items-center w-60 h-60">
        <p
          className={`absolute px-5 font-bold text-xl text-center uppercase ${
            !cardInfo.name.includes(" ") && "break-all"
          }`}
        >
          {cardInfo.name}
        </p>
        <p className="absolute translate-y-[90px] translate-x-16 font-bold text-lg">
          R$ {cardInfo.value}
        </p>
      </div>

      <img src={cardInfo.imageUrl} />
    </div>
  );
}