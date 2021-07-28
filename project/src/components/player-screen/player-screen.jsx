import React from 'react';
import PropTypes from 'prop-types';
import PlayButton from '../play-button/play-button';
import PlayerVideo from '../player-video/player-video.jsx';
import {filmPropType} from '../../propTypes/film.prop.js';

function PlayerScreen ({film}) {
  return (
    <div className="player">
      < PlayerVideo film={film}/>

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">{film.runTime}</div>
        </div>

        <div className="player__controls-row">
          <PlayButton/>
          <div className="player__name">{film.name}</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkhref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

PlayerScreen.propTypes = {
  film: PropTypes.shape(filmPropType).isRequired,
};

export default PlayerScreen;
