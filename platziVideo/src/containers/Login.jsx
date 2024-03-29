/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import googelIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import '../assets/styles/components/Login.scss';
import Header from '../components/Header';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };

  return (
    <>
      <Header isLogin />
      <section className='login'>
        <section className='login__container'>
          <h2>Inicia sesión</h2>
          <form className='login__container--form' onSubmit={handleSubmit}>
            <input name='email' className='input' type='text' placeholder='Correo' onChange={handleInput} />
            <input name='password' className='input' type='password' placeholder='Contraseña' onChange={handleInput} />
            <button className='button'>Iniciar sesión</button>
            <div className='login__container--remember-me '>
              <label>
                <input type='checkbox' name='' id='cbox1' value='checkbos' />
                {' '}
                <p>Recuérdame</p>
              </label>
              <a href='/'>Olvidé mi contraseña</a>
            </div>
          </form>
          <section className='login__container--social-media'>
            <div>
              <img src={googelIcon} alt='Goolge' />
              Inicia sesión con Google
              {' '}
            </div>
            <div>
              <img src={twitterIcon} alt='Twitter' />
              Inicia sesión con Twitter
              {' '}
            </div>
          </section>
          <p className='login__container--register'>
            No tienes ninguna cuenta
            {' '}
            <Link to='/register'>
              Regístrate
            </Link>
          </p>
        </section>
      </section>
    </>
  );
};

export default connect(null, { loginRequest })(Login);
