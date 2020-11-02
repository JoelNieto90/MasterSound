import React from 'react'
import '../styles/componentsStyles/ArtistProfile.scss'

import ArtistImg from '../Assets/RollingCover.jpeg'

const ArtistProfile = ({ artistName, follower, listener, song }) => {
  return (
    <div className='ArtistProfile__container'>
      <section>
        <img src={ArtistImg} alt='Artist'/>
      </section>
      <div>
        <div className='Artist__title'>
          <span>{artistName}</span>
        </div>
        <div className='ArtistProfile__details'>
          <div className='Artist__followers'>
            <p>Followers<br/><span>{follower}</span></p>
          </div>
          <div className='Artist__listeners'>
            <p>Listener<br/><span>{listener}</span></p>
          </div>
          <div className='Artist__songs'>
            <p>Songs<br/><span>{song}</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtistProfile