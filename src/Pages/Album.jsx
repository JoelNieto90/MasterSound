import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetchmusic } from '../hooks/useFetchmusic'

import Panel from '../components/Panel'
import InfoAlbum from '../components/InfoAlbum'
import Playbar from '../components/Playbar'
import MenuBar from '../components/MenuBar'
import '../styles/PagesStyles/Album.scss'

const Album = () => {
    const {myId} = useParams();

    const albumLocalStorage = JSON.parse( localStorage.getItem("albums"))
    const album = albumLocalStorage.find(item => item.spt_album_id === myId);
    
//---------------FETCH songs(call to API-songs)------------------------------------//
    const songs = useFetchmusic(myId)
//---------------storing the songs in the local storage----------------------//
    localStorage.setItem( "SongsList", JSON.stringify( songs ))
    
    return(
        <div className='Album__container'>
            <Playbar />
            <Panel />
            <section className='ContentSection__Album'>
                <MenuBar />
                <InfoAlbum data={album} />
            </section>   
        </div>
    )
}

export default Album;
