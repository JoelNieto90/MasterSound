import React, { Fragment } from 'react';
import '../styles/componentsStyles/ListTrack.scss';

//********  Icons  **********//
import { FavouriteIcon, DownloadItemsIcon, ShareIcon } 
from './Icons';

const ListTrack = ({number, song, artist, reproductions, time}) => {
    return (
        <Fragment>
            <section className='listTrack'>
                <p className='listTrack__Number'>{number}</p>
                <button className='listTrack__Favourite'>
                    {<FavouriteIcon />}
                </button>
                <button className='listTrack__Song'>{song}</button>
                <button className='listTrack__Artist'>{artist}</button>
                <p className='listTrack__Reproductions'>{reproductions}</p>
                <p className='listTrack__Time'>{time}</p>
                <button className='listTrack__Download'>
                    {<DownloadItemsIcon />}
                </button>
                <button className='listTrack__Share'>
                    <ShareIcon />
                </button>
                <button className='listTrack__Points'>...</button>
            </section>
        </Fragment>
    );
}
 
export default ListTrack;