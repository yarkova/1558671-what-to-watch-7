import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from '../main-screen/main-screen.jsx';
//import SmallFilmCard from '../small-film-card/small-film-card.jsx';

function App({mainFilm, films}) {
  return (<MainScreen mainFilm={mainFilm} films={films} />);
}

App.propTypes = {
  mainFilm: {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  },
  films: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
};

export default App;
