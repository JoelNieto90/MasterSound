import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import '../styles/PagesStyles/Panel.scss';
import SideLinks from '../components/SideLinks';
import Logo from '../Assets/Icons/logo.svg';

import Plus from '../Assets/Icons/Plus.svg';

//********  Icons  **********//
import { AddIcon, DiscoverIcon, SongsIcon,
        AlbumsIcon, ArtistsIcon, YoutubeIcon,
        FavouriteIcon, RecentHistoryIcon,
        LocalfilesIcon, DownloadItemsIcon } 
from '../components/Icons';

export default class Panel extends Component {
    render() {
        return(
            <div className='panel'>
                <img className='panel__logo' src={Logo} alt='Logo' />
                <Link to="/home">
                    <SideLinks icon={<DiscoverIcon />} text='Discover' />
                </Link>
                <SideLinks icon={<SongsIcon />} text='Songs' />
                <Link to="/album-library">
                    <SideLinks icon={<AlbumsIcon />} text='Albums' />
                </Link>
                <Link to="/artist-section">
                    <SideLinks icon={<ArtistsIcon />} text='Artists' />
                </Link>
                <SideLinks icon={<YoutubeIcon />} text='YouTube' />
                
                <p className='panel__p'>My Tracks</p>
                <SideLinks icon={<FavouriteIcon />} text='Favourite' />
                <SideLinks icon={<RecentHistoryIcon />} text='Recent History' />
                <SideLinks icon={<DownloadItemsIcon />} text='Download Items' />
                <SideLinks icon={<LocalfilesIcon />} text='Local Files' />

                <div className='PlayList'>
                    <p className='PlayList__p'>Playlist</p>
                    <Link to='/'>
                        <img className='PlayList__img' src={Plus} alt='Agregar' />
                    </Link>
                </div>
                <SideLinks icon={<AddIcon />} text='Bangla' />
                <SideLinks icon={<AddIcon />} text='English' />
                <SideLinks icon={<AddIcon />} text='My Style' />
                <SideLinks icon={<AddIcon />} text='Hindi' />
            </div>
        )
    }
}

