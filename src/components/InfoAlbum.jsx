import React, { Fragment } from 'react';
import ListAlbum from './ListAlbum';
import '../styles/componentsStyles/InfoAlbum.scss';
import MySpotifyPlayer from './MySpotifyPlayer';

// size may also be a plain string using the presets 'large' or 'compact'
const size = {
    width: '100%',
    height: 300,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white' 

function InfoAlbum({ data }) {
    const nameArtists = data.artists.map((data) => {
        return data.artist_name;
    })
//----------------------getting songs from local storage-----------------------//
    const musicLocalstorage = JSON.parse( localStorage.getItem("SongsList"))
    const idAlbum = data.spt_album_id;

    return (
        <Fragment>
            <div className='InfoAlbum'>
                <img className='InfoAlbum__img' src={data.cover_image_url} alt='Album Cover' />
                <section className='InfoAlbum__Subtitle'>
                    <p className='InfoAlbum__Subtitle--text'>Album</p>
                    <p className='InfoAlbum__Subtitle--NameAlbum'>{data.album_name}</p>
                    <p className='InfoAlbum__Subtitle--Artist'>{nameArtists}</p>
                    <p className='InfoAlbum__Subtitle--Description'>{data.name}</p>
                        <MySpotifyPlayer 
                            uri= {`spotify:album:${idAlbum}`}
                            size={size}
                            view={view}
                            theme={theme} 
                        />
                        {
                            musicLocalstorage.map( (item) => (
                                <ListAlbum data={item} {...item}/>
                            ))
                        }
                </section>
            </div>
        </Fragment>
    );
}
 
export default InfoAlbum;