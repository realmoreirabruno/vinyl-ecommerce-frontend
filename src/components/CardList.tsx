import { AlbumModel } from "../types/AlbumModel";
import Card from "./Card";

interface Disc {
  id: number;
  name: string;
  value: number;
  imageUrl: string;
}

interface Props {
  albums?: AlbumModel[];
  discs?: Disc[];
  loading: boolean;
  setAlbumDetails?: React.Dispatch<React.SetStateAction<AlbumModel | null>>;
}

export default function CardList({
  albums,
  discs,
  loading,
  setAlbumDetails,
}: Props) {
  return loading ? (
    <h2 className="text-2xl md:text-[20px]">Carregando álbuns...</h2>
  ) : (
    <div className="flex flex-wrap gap-6 pb-8">
      {albums
        ? albums.map((album) => {
            return (
              <Card
                cardInfo={{
                  name: album.name,
                  value: album.value,
                  imageUrl: album.images[0].url,
                }}
                album={album}
                setAlbumDetails={setAlbumDetails}
                key={album.id}
              />
            );
          })
        : discs &&
          discs.map((disc) => {
            return (
              <Card
                cardInfo={{
                  name: disc.name,
                  value: disc.value,
                  imageUrl: disc.imageUrl,
                }}
                key={disc.id}
              />
            );
          })}
    </div>
  );
}