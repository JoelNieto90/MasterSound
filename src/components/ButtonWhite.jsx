import React from 'react';
import '../styles/componentsStyles/ButtonWhite.scss';


const ButtonWhite = ({text}) => {

  return (
    <button 
      className='button'
    >{text}</button>
  )
}

export default ButtonWhite;