import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block.jsx';
import PlayButton from '../play-button/play-button';
import {filmPropType} from '../../propTypes/film.prop.js';

function FilmScreen ({film}) {
//  const history = useHistory();
//  const handlePlayButtonClick = () => {history.push(`/player/${film.id}`)};

  return (

    <section className="film-card film-card--full">
      <div className="film-card__hero">
        <div className="film-card__bg">
          <img src={film.previewImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />
          <UserBlock />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__desc">
            <h2 className="film-card__title">{film.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{film.genre}</span>
              <span className="film-card__year">{film.released}</span>
            </p>

            <div className="film-card__buttons">
              <PlayButton />
              <Link className="btn btn--list film-card__button" type="button" to={`/player/${film.id}`}>
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkhref="#add"></use>
                </svg>
                <span>My list</span>
              </Link>
              <Link className="btn film-card__button" to={`/films/${film.id}/review`}>Add review</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="film-card__wrap film-card__translate-top">
        <div className="film-card__info">
          <div className="film-card__poster film-card__poster--big">
            <img src={film.previewImage} alt={film.name} width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <nav className="film-nav film-card__nav">
              <ul className="film-nav__list">
                <li className="film-nav__item film-nav__item--active">
                  <a href="#" className="film-nav__link">Overview</a>
                </li>
                <li className="film-nav__item">
                  <a href="#" className="film-nav__link">Details</a>
                </li>
                <li className="film-nav__item">
                  <a href="#" className="film-nav__link">Reviews</a>
                </li>
              </ul>
            </nav>

            <div className="film-rating">
              <div className="film-rating__score">{film.rating}</div>
              <p className="film-rating__meta">
                <span className="film-rating__level">Very good</span>
                <span className="film-rating__count">{film.scoresCount} ratings</span>
              </p>
            </div>

            <div className="film-card__text">
              {film.description}
              <p className="film-card__director"><strong>{film.director}</strong></p>
              <p className="film-card__starring"><strong>{film.starring}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>

  //  <div className="page-content">
  //  <section className="catalog catalog--like-this">
  //    <h2 className="catalog__title">More like this</h2>
  //    <FilmList  films={films.filter((el) => el.genre === genre).slice(0, 4)}/>
  //  </section>
  //  <LogoFooter />
  //  </div>
  //<>
  );
}

FilmScreen.propTypes = {
  film: filmPropType.isRequired,
};

export default FilmScreen;
