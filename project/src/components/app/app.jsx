import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';

import MainScreen from '../main-screen/main-screen.jsx';
import LoginScreen from '../login-screen/login-screen.jsx';
import MyListScreen from '../mylist-screen/mylist-screen.jsx';
import FilmScreen from '../film-screen/film-screen.jsx';
import AddReviewScreen from '../add-review-screen/add-review-screen.jsx';
import PlayerScreen from '../player-screen/player-screen.jsx';
import NotFoundScreen from '../not-found-screen/not-found-screen.jsx';

function App({genres, mainFilm, films}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainScreen genres={genres} mainFilm={mainFilm} films={films} />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <LoginScreen />
        </Route>
        <Route exact path={AppRoute.MY_LIST}>
          <MyListScreen />
        </Route>
        <Route exact path={AppRoute.FILM}>
          <FilmScreen />
        </Route>
        <Route exact path={AppRoute.ADD_REVIEW}>
          <AddReviewScreen />
        </Route>
        <Route exact path={AppRoute.PLAYER}>
          <PlayerScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  genres: PropTypes.arrayOf({
    item: PropTypes.string.isRequired,
  }).isRequired,
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
