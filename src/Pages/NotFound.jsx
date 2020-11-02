import React from 'react'

import ButtonWhite from '../components/ButtonWhite'
import Error404 from '../Assets/error404.svg';

import '../styles/PagesStyles/NotFound.scss'

class NotFound extends React.Component {
    handleBackClick = () => {
      this.props.history.goBack();
    }
  
    render(){
      return(
        <React.Fragment>
          <div className='notfound_container'>
            <img src={Error404} alt="error 404" />
            <ButtonWhite 
              text='volver'
              className='button'
              onClick={this.handleBackClick}
              />
          </div>
        </React.Fragment>
      )
    }
  }
  
  export default NotFound;