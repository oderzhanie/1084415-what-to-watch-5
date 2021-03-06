import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import moment from "moment";

class Player extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {film} = this.props;
    const {
      // movieId,
      movieName,
      moviePosterImg,
      movieVideoLink,
      movieRuntime
    } = film;

    const getRunTime = (runtime) => {
      const runtimeHours = Math.trunc(moment.duration(runtime, `m`).asHours()); // Переделать потом на пересчет из секунд
      const runtimeMinutes = moment.duration(runtime % 60, `m`).asMinutes();

      if (runtimeHours === 0) {
        return (
          `00:${runtimeMinutes}:00`
        );
      } else {
        return (
          `${runtimeHours}:${runtimeMinutes}:00`
        );
      }
    };

    const runtime = getRunTime(movieRuntime);

    return (
      <div className="player">
        <video src={movieVideoLink} className="player__video" poster={`img/${moviePosterImg}`}></video>

        <button type="button" className="player__exit">Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100"></progress>
              <div className="player__toggler" style={{left: 30 + `%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{runtime}</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">{movieName}</div>

            <button type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  film: PropTypes.shape({
    // movieId: PropTypes.string.isRequired,
    movieName: PropTypes.string.isRequired,
    moviePosterImg: PropTypes.string.isRequired,
    movieVideoLink: PropTypes.string.isRequired,
    movieRuntime: PropTypes.number.isRequired
  }).isRequired
};

export default Player;
