import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import classNames from 'classnames';
import gravatar from '../utils/gravatar';

import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';
import { logoutRequest } from '../actions/index';

function Header(props) {
  const { user, isLogin, isRegister } = props;
  //object.keys nos permite pasarle un objeto y poder hacer un length.
  const hasuser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  const headerClass = classNames('header', {
    isLogin,
    isRegister,
  });

  return (
    <header className={headerClass}>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>

      <div className='header__menu'>
        <div className='header__menu--profile'>
          {
            (hasuser) ? <img src={gravatar(user.email)} alt={user.email} /> :
              // eslint-disable-next-line react/jsx-indent
              <img src={userIcon} alt='' />
          }
          <p>Perfil</p>
        </div>
        <ul>
          {
            (hasuser) ?
              <li><a href='/'>{user.name}</a></li> :
              null
          }

          {
            (hasuser) ?
              <li><a href='#logout' onClick={handleLogout}>Cerrar Sesion</a></li> : (
                <li>
                  <Link to='/login'>
                    Iniciar Sesion
                  </Link>
                </li>
              )
          }

        </ul>
      </div>
    </header>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps, { logoutRequest })(Header);
