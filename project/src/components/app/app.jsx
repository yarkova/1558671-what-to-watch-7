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

import {filmsPropTypes} from '../../propTypes/film.prop.js';


function App({genres, mainFilm, films, ratings}) {
//  const getFilmsFilter = (param) => films.filter((item) => item.id === +param.match.params.id)[0];

  const routes = [{
    path: AppRoute.MAIN,
    component: <MainScreen genres={genres} mainFilm={mainFilm} films={films} ratings={ratings} />,
  },
  {
    path: AppRoute.LOGIN,
    component: <LoginScreen />,
  },
  {
    path: AppRoute.MY_LIST,
    component: <MyListScreen films={films} />,
  },
  {
    path: AppRoute.FILM,
    component: <FilmScreen film={films}/>,
  },
  {
    path: AppRoute.ADD_REVIEW,
    component: <AddReviewScreen ratings={ratings}/>,
  },
  {
    path: AppRoute.PLAYER,
    component: <PlayerScreen film={films}/>,
  },
  {
    path: AppRoute.NOTFOUND,
    component: <NotFoundScreen />,
  },
  ];
  return (
    <BrowserRouter>
      <Switch>

        {routes.map((route) => <Route exact path={route.path} key={route.path}>{route.component}</Route>)}
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
  films: filmsPropTypes.isRequired,
  ratings: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }).isRequired,
};

export default App;
