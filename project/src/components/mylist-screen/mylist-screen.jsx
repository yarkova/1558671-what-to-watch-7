import React from 'react';
import Logo from '../logo/logo';
import FilmList from '../films-list/films-list.jsx';
import LogoFooter from '../logo-footer/logo-footer.jsx';
import {filmPropType} from '../../propTypes/film.prop.js';

function MyListScreen ({films}) {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmList films={films} />
      </section>
      <LogoFooter />
    </div>
  );
}

MyListScreen.propTypes = {
  films: filmPropType.isRequired,
};


export default MyListScreen;
