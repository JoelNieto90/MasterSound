import React from 'react'

import RectangleAlbum from '../components/RectangleAlbum'
import '../styles/componentsStyles/RectangleAlbumGarden.scss'


const RectangleAlbumGarden = ({ SectionName }) => {
    const albumLocalStorage = JSON.parse( localStorage.getItem("albums"))

    return(
        <div className="RectangleAlbum__garden">
            <section className='NameSection__Rectangle'>
                <h3>{SectionName}</h3>
            </section>
            <section className='AlbumSection__Rectangle'>
                {
                albumLocalStorage.map((data) => (
                    <RectangleAlbum data={data} key={data.spt_album_id} {...data}/>
                    ))
                }
                
            </section>
        </div>
    )
}

export default RectangleAlbumGarden;
