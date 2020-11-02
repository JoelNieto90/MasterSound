import React from 'react'
import { Link } from 'react-router-dom';

import '../styles/componentsStyles/CircleTrack.scss'


const CircleTrack = ({ id, image, song, artist }) => {
    return(
        <div className="playbar__track">
            <Link to={`/album/${id}`}>
                <img src={image} alt='Cover'/>
            </Link>
            <h6>{song}</h6>
            <p>{artist}</p>
        </div>
    )
}

export default CircleTrack;