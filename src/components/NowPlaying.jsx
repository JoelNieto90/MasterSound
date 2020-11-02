
import React from 'react';
import '../styles/componentsStyles/NowPlaying.scss'
import SongImg from '../Assets/RollingCover.jpeg'
import Menu from '../Assets/Icons/PlayList.svg'

const NowPlaying = ({ song, artist }) => {
  return (
    <>
      <div className='SongInfo__container'>
          <img src={SongImg} alt=""/>
          <div className="textContainer">
            <div className="songName">
              <p>Kamelia {song}</p>
            </div>
            <div className="artistName">
              <span>Akcent ft Lidia BubleDDY Nunes {artist}</span>
            </div>
          </div>
          <div className="menu-wrapper">
            <div class="hamburger-menu">
              <img src={Menu} alt="menu"/>
            </div>
          </div>

      </div>
    </>
  )
}
export default NowPlaying