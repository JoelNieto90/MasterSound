import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ProfileImage from '../Assets/Icons/ProfileImage.svg'
import '../styles/componentsStyles/UserProfile.scss'

class Modal extends Component{
  render(){
      return(
          <section>
            <div className="perfilMenu">
                <Link to="/home/configuration">Configuración</Link>
                <Link to="/Signin">Cerrar Sesión</Link>
            </div>
        </section>
      )
  }
}

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  render() {
    return (
    <section className="UserProfile__section" onClick={this.handleClick}>
      {this.state.isToggleOn ? '' : <Modal onClose={this._closeModal}/>}
      <img src={ProfileImage} alt="profile icon"/>
      <p>User Name </p>
    </section>
  );
}
}

export default UserProfile