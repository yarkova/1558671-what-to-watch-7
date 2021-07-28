import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {films} from './mocks/films.js';

const GENRES = [
  {item: 'All genres'},
  {item: 'Comedies'},
  {item: 'Crime'},
  {item: 'Documentary'},
  {item: 'Dramas'},
  {item: 'Horror'},
  {item: 'Kids & Family'},
  {item: 'Romance'},
  {item: 'Sci-Fi'},
  {item: 'Thrillers'}];

const MAIN_FILM = {
  src: 'img/the-grand-budapest-hotel-poster.jpg',
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: '2014',
};

const RATINGS = [
  {id:'10'},
  {id:'9'},
  {id:'8'},
  {id:'7'},
  {id:'6'},
  {id:'5'},
  {id:'4'},
  {id:'3'},
  {id:'2'},
  {id:'1'}];

ReactDOM.render(
  <React.StrictMode>
    <App
      genres={GENRES}
      mainFilm={MAIN_FILM}
      ratings={RATINGS}
      films={films}
    />
  </React.StrictMode>,
  document.getElementById('root'));
