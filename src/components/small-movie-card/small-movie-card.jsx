import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {FILM_SHAPE} from "../../utils/constants.js";
import {Link} from "react-router-dom";

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {film} = this.props; // onMouseOver добавить потом
    const {
      movieId,
      movieName,
      moviePreviewImg
    } = film;

    return (
      <article key={movieId} id={movieId} className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image" >
          <img src={`img/${moviePreviewImg}`} alt={movieName} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <Link to={{pathname: `/films/:id`}} className="small-movie-card__link">{movieName}</Link>
        </h3>
      </article>
    );
  }
}

SmallMovieCard.propTypes = {
  film: PropTypes.shape(FILM_SHAPE).isRequired,
  // onMouseOver: PropTypes.func
};

export default SmallMovieCard;
