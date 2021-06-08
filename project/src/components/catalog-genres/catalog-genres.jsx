import React from 'react';
import PropTypes from 'prop-types';

function CatalogGenre ({item}) {
  return (
    <li className="catalog__genres-item catalog__genres-item">
      <a href="#" className="catalog__genres-link">{item}</a>
    </li>);
}
CatalogGenre.propTypes = {
  item: PropTypes.string.isRequired,
};

export default CatalogGenre;
