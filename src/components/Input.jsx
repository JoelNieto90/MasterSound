import React, { Fragment } from 'react';
import '../styles/componentsStyles/Input.scss';

const Input = ({type, placeholder, name, onChange, value}) => {
    return (
        <Fragment>
            <input type={type} placeholder={placeholder} name={name} onChange={onChange} value={value} className='input' />
        </Fragment>
    );
}

export default Input;