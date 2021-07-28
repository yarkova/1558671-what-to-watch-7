import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {filmPropType} from '../../propTypes/film.prop.js';

function SmallFilmCard ({film}) {
  const history = useHistory();
  const handleFilmCardClick = () => {history.push(`/films/${film.id}`);
  };
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image" onClick={handleFilmCardClick}>
        <img src={film.previewImage} alt={film.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`} >{film.name}</Link>
      </h3>
    </article>);
}
SmallFilmCard.propTypes = {
  film: filmPropType.isRequired,
};
export default SmallFilmCard;
