import React from 'react';

//----- Import components------//
import Button from '../components/Button';
import CloudAnimation from '../components/CloudAnimation';

import '../styles/Login.css'

const Login = () => (
    <div className='Login-Container'>
        <CloudAnimation />
        <form className='Form-Container'>
            <input 
                className='Input-Styles'
                type='email'
                name='passemailword'
                placeholder='Your e-mail'
                />
            <input 
                className='Input-Styles'
                type='password'
                name='password'
                placeholder='Password'
                />
        <Button text='Iniciar Sesión'/> 
        </form>
    </div>
);

export default Login;