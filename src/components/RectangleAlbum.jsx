import React from 'react'
import { Link } from 'react-router-dom';

import '../styles/componentsStyles/RectangleAlbum.scss'

const RectangleAlbum = ({data}) => {
    const nameArtists = data.artists.map((data) => {
        return data.artist_name;
    })

    return(
        <Link to={`/album/${data.spt_album_id}`}>
            <div className='RectangleCover'>
                <img src={data.cover_image_url} alt='cover' />
                <div className="AlbumDetails">
                    <div className='AlbumDetails__information'>
                        <h3>{data.album_name}</h3>
                        <p>{nameArtists}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default RectangleAlbum;