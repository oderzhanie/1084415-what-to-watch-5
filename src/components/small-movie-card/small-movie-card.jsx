import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import FILM_SHAPE from "../../utils/constants.js";

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    // this.state = {
    //  стейт в этом компоненте не нужен?
    // };
  }

  render() {
    const {film, key, onMouseOver} = this.props;
    const {
      movieId,
      movieName,
      moviePreviewImg
    } = film;
    const {id} = onMouseOver;

    const actualClassName = id === movieId ? `small-movie-card small-movie-card:hover catalog__movies-card` : `small-movie-card catalog__movies-card`;

    return (
      <article key={`${key}`} className={`${actualClassName}`}>
        <div className="small-movie-card__image">
          <img src={`img/${moviePreviewImg}`} alt={`${movieName}`} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{movieName}</a>
        </h3>
      </article>
    );
  }
}

SmallMovieCard.propTypes = {
  film: PropTypes.shape(FILM_SHAPE).isRequired,
  key: PropTypes.string.isRequired,
  onMouseOver: PropTypes.func
};

export default SmallMovieCard;
