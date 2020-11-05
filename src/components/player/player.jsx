import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class Player extends PureComponent {
  constructor(props) {
    super(props);

    // this.state = {

    // }
  }

  render() {
    const {film} = this.props;
    const {
      // movieId,
      movieName,
      moviePosterImg,
      movieVideoLink,
    } = film;

    return (
      <div className="player">
        <video src={`${movieVideoLink}`} className="player__video" poster={`img/${moviePosterImg}`}></video>

        <button type="button" className="player__exit">Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100"></progress>
              <div className="player__toggler" style="left: 30%;">Toggler</div>
            </div>
            <div className="player__time-value">1:30:29</div>
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
  }).isRequired
};

export default Player;
