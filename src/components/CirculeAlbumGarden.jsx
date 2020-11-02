import React from 'react'

import CircleAlbum from '../components/CircleAlbum'
import '../styles/componentsStyles/CircleAlbumGarden.scss'


const CircleAlbumGarden = ({ SectionName }) => {
    const albumLocalStorage = JSON.parse( localStorage.getItem("albums"))

    return(
        <div className="CircleAlbum__garden">
            <section className='NameSection'>
                <h3>{SectionName}</h3>
            </section>
            <section className='AlbumSection'>
                {
                albumLocalStorage.map((data) => (
                    <CircleAlbum data={data} key={data.id} {...data}/>
                ))
              }
            </section>
        </div>
    )
}

export default CircleAlbumGarden;
