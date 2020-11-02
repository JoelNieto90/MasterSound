import React from 'react'
import { Link } from 'react-router-dom';

import '../styles/componentsStyles/CircleAlbum.scss'


const CircleAlbum = ({data}) => {
    const nameArtists = data.artists.map((data) => {
        return data.artist_name;
    })

    return(
        <div className="CircleAlbum__container">
            <Link to={`/album/${data.spt_album_id}`}>
                <img src={data.cover_image_url} alt='Cover'/>
            </Link>
            <h6>{data.album_name}</h6>
            <p>{nameArtists}</p>
        </div>
    )
}

export default CircleAlbum;