import React, { Fragment } from 'react';
import '../styles/componentsStyles/ButtonIcon.scss';


const ButtonIcon = ({ text, onClick, className, icon }) => {

  return (
      <Fragment>
          <div className="container">
            <button className={className} onClick={onClick}>
                <p>{text}</p>
                {icon}
            </button>
          </div>
      </Fragment>
  )
}

export default ButtonIcon;