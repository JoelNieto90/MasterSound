import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import '../styles/componentsStyles/ListAlbum.scss';

import {setPlaying} from '../actions/songActions'
//********  Icons  **********//
import { FavouriteIcon, DownloadItemsIcon, ShareIcon, PlusIcon } 
from '../components/Icons';


const ListAlbum = (props) => {
    const dispatch = useDispatch()

    function setPlayingSong () {
        dispatch(setPlaying(props.data.sound_url))
    }

    return (
        <Fragment>
            <section onClick={setPlayingSong} className='listAlbum'>
                <p className='listAlbum__Number'>{props.data.order_number}</p> 
                <div className='listAlbum__Favourite'>
                    {<FavouriteIcon />}
                </div>
                <button className='listAlbum__Plus'>
                    {<PlusIcon />}
                </button>
                <div className='listAlbum__Song'>{props.data.name}</div>
                <p className='listAlbum__Reproductions' >{props.data.played_song_number}</p>
                <p className='listAlbum__Time'>{props.data.duration}</p>
                <button className='listAlbum__Download'>
                    {<DownloadItemsIcon />}
                </button>
                <button className='listAlbum__Share'>
                    <ShareIcon />
                </button>
                <button className='listAlbum__Points'>...</button>
            </section>
        </Fragment>
    );
}
 
export default ListAlbum;