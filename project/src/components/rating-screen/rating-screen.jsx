import React from 'react';
import PropTypes from 'prop-types';

function RatingScreen ({id}) {
  return (
    <div className="rating__stars">
      <input className="rating__input" id={`star-${id}`} type="radio" name="rating" value={id} />
      <label className="rating__label" htmlFor={`star-${id}`}>Rating {id}</label>
    </div>
  );
}
RatingScreen.propTypes = {
  id: PropTypes.string.isRequired,
};

export default RatingScreen;
