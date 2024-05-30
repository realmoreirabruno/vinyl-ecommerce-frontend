export type AlbumModel = {
    albumType: string;
    artists: Artist[];
    externalUrls: AlbumExternalUrls;
    id: string;
    images: Image[];
    name: string;
    releaseDate: string;
    type: string;
    value: number;
  }
  
  type Artist = {
    externalUrls: ArtistExternalUrls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }
  
  type ExternalUrls = {
    spotify: string;
  }
  
  type AlbumExternalUrls = {
    externalUrls: ExternalUrls;
  }
  
  type ArtistExternalUrls = {
    externalUrls: ExternalUrls;
  }
  
  type Image = {
    height: number;
    url: string;
    width: number;
  }