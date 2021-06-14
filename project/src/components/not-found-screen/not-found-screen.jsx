import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../logo/logo';

function NotFoundScreen () {
  return (
    <>
      <header className="page-header film-card__head">
        <Logo />
      </header>

      <h2 className="film-card__title">404. Page not Found</h2>
      <Link to='/'>Вернуться на главную страницу</Link>
    </>
  );
}

export default NotFoundScreen;
