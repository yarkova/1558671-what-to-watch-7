import React  from 'react';
import SmallFilmCard from '../small-film-card/small-film-card.jsx';
import {filmsPropTypes} from '../../propTypes/film.prop.js';

function FilmList({films}) {
//  const [activeFilmCardId, setActiveFilmCardId] = useState(null);
//  const handleFilmCardHover = (id) => {
//      setActiveFilmCardId(id);
//      return activeFilmCardId;
//    };

  return (
    <div className="catalog__films-list">
      {films.map((film) => <SmallFilmCard key={film.id} film={films} />)}
    </div>
  );
}

FilmList.propTypes = {
  films: filmsPropTypes.isRequired,
};

export default FilmList;
