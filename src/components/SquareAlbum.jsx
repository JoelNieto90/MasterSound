import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/componentsStyles/SquareAlbum.scss'

const SquareAlbum = ({data}) => {
  const nameArtists = data.artists.map((data) => {
    return data.artist_name;
})
  
  return (
    <div className='SquareAlbum__container'>
      <Link to={`/album/${data.spt_album_id}`}>
        <img src={data.cover_image_url} alt="Cover Album"/>
      </Link>
        <p>{data.album_name}</p>
        <span>{nameArtists}</span>
      </div>
)
}

export default SquareAlbum;