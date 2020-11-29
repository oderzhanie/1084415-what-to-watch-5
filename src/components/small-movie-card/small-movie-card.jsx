import React from "react";
import PropTypes from "prop-types";
import {FILM_SHAPE} from "../../utils/constants.js";
import {Link} from "react-router-dom";

const SmallMovieCard = (props) => {
  const {film, renderPlayer} = props;
  const {
    movieId,
    movieName,
    moviePreviewImg,
    moviePreviewLink
  } = film;

  return (
    <article
      id={movieId}
      className="small-movie-card catalog__movies-card">
      {renderPlayer(moviePreviewLink, moviePreviewImg)}
      <h3 className="small-movie-card__title">
        <Link to={{pathname: `/films/:id`}} className="small-movie-card__link">{movieName}</Link>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  film: PropTypes.shape(FILM_SHAPE).isRequired,
  renderPlayer: PropTypes.func.isRequired
};

export default SmallMovieCard;
