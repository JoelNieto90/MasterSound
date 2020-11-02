import React from 'react';
import '../styles/componentsStyles/ButtonPurple.scss';


const ButtonPurple = ({text, onClick, className}) => {

  return (
    <button 
      className={className}
      onClick={onClick}
    >{text}</button>
  )
}

export default ButtonPurple;