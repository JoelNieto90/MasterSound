import React from 'react'
import { Link } from 'react-router-dom';

import '../styles/componentsStyles/BigSquareAlbum.scss'

const BigSquareAlbum = ({ data }) => {
    const nameArtists = data.artists.map((data) => {
        return data.artist_name;
    })
    return(
        <Link to={`/album/${data.spt_album_id}`}>
            <div className='BigSquareAlbum__container'>
                <img src={data.cover_image_url} alt="Cover Album"/>
                <div className='BigSquareAlbum__detail'>
                    <div className='BigSquareAlbum__information'>
                        <h3>{data.album_name}</h3>
                        <p>{nameArtists}</p>
                    </div>
                </div>
            </div>
         </Link>
        
    )
}

export default BigSquareAlbum;
