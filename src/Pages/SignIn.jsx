import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import '../styles/PagesStyles/SignIn.scss';
import Logo from '../Assets/Icons/logo.svg';
import Input from '../components/Input';
import ButtonWhite from '../components/ButtonWhite';
import { useFetchAlbum } from '../hooks/useFetchAlbum';

export default function SingIn() {
    //-----------------FETCH Albums (call toAPI)------------------------------//
    const albumList = useFetchAlbum('https://mastersound-backend.azurewebsites.net/api/albums/new-releases')       
    //-----------------storing the album in the local storage----------------------//
    localStorage.setItem( "albums", JSON.stringify( albumList ))

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://mastersound-backend.azurewebsites.net/api/auth/login', {
            method: 'post',
            mode: 'cors', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            if(response) {
                console.log('Success:', response);
                history.push('/home');
            }
        } 
    )};

    return(
        
        <main className='mainSignIn'>
        <img src={Logo} alt='Logo' />
        <form onSubmit={handleSubmit} className='mainSignIn__form'>
            <label>e-mail</label>
            <Input
                type='email' 
                placeholder='e-mail' 
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email} 
            />
            <label>Password</label>
            <Input
                type='password' 
                placeholder='Password' 
                name='password' 
                onChange={(e) => setPassword(e.target.value)}
                value={password} 
            />   
            <div className="theme-switch-wrapper">
                <p>Mantener la sesion abierta</p>
                <label className="theme-switch">
                <input type="checkbox" id="checkbox" />
                    <div className="slider round"></div>
                </label>
            </div>    
            <ButtonWhite text='Iniciar Sesion' />
            
            <section className='mainSignIn__form--link'>
                <Link to='/'>Olvide mi contraseña</Link>
                <Link to='/register'>Crear una cuenta</Link>
            </section>
            </form>
        </main>
    )
}
