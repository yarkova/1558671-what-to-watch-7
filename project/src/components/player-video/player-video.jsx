import React from 'react';
import {filmPropType} from '../../propTypes/film.prop.js';

function PlayerVideo ({film}) {
  return (
    <video src={film.src} className="player__video" poster={film.poster} />
  );
}

PlayerVideo.propTypes = {
  film: filmPropType.isRequired,
};

export default PlayerVideo;
