import React from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';

function RouteScreen ({path, component}) {
  return (
    <Route exact path={path}>{component}</Route>
  );
}

RouteScreen.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.string.isRequired,
};

export default RouteScreen;
