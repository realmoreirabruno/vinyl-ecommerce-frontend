import { AlbumModel } from '@/models/AlbumModel';
import { albumApi } from '@/services/apiService';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css'

const Albums = [
  { name: 'Album01', image: 'https://picsum.photos/200', url: '' },
  { name: 'Album02', image: 'https://picsum.photos/200', url: '' },
  { name: 'Album03', image: 'https://picsum.photos/200', url: '' },
  { name: 'Album04', image: 'https://picsum.photos/200', url: '' },
  { name: 'Album05', image: 'https://picsum.photos/200', url: '' },
  { name: 'Album06', image: 'https://picsum.photos/200', url: '' },
  { name: 'Album07', image: 'https://picsum.photos/200', url: '' },
  { name: 'Album08', image: 'https://picsum.photos/200', url: '' },
  { name: 'Album09', image: 'https://picsum.photos/200', url: '' },
  { name: 'Album10', image: 'https://picsum.photos/200', url: '' },
]

export function Home() {
  // const [albums, setAlbums] = useState<AlbumModel[]>([]);
  const _navigate = useNavigate();

  // useEffect(() => {
  //   albumApi.get('/albums/all?searchText=Lets go 4', {headers: { Authorization: `Basic ${localStorage.getItem('@Auth.Data')}}`}})
  //     .then((resp) => {
  //       setAlbums(resp.data);
  //       console.log(resp);
  //     })
  // }, []);
  
  return (
    <div className='flex items-center justify-center h-screen relative overflow-hidden'>
        <div className='carousel-home absolute left-0 flex items-center w-full'>
          {Albums.map((album, i) => (
            <div className='pr-8'>
              <div key={i} style={{'--bg-card': `url(${album.image}`} as React.CSSProperties}
              className="bg-[image:var(--bg-card)] bg-cover bg-no-repeat w-60 h-[245px] rounded-md hover:scale-110 transition">
              <div onClick={() => _navigate(album.url)} className="flex h-full justify-center items-center backdrop-brightness-50 p-6 cursor-pointer">
                <h1 className="text-2xl font-semibold text-white text-center">{album.name}</h1>
              </div>
            </div>
          </div>
          ))}
        </div>
    </div>
  )
}