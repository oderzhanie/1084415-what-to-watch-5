import PropTypes from "prop-types";

export const FILMS_LIST_LENGTH = 8;

export const FILM_SHAPE = {
  movieId: PropTypes.number.isRequired,
  movieName: PropTypes.string.isRequired,
  moviePosterImg: PropTypes.string.isRequired,
  moviePreviewImg: PropTypes.string.isRequired,
  movieBgImg: PropTypes.string.isRequired,
  movieBgColor: PropTypes.string.isRequired,
  movieRating: PropTypes.number.isRequired,
  movieRatingVerbal: PropTypes.string.isRequired,
  movieScoresCount: PropTypes.number.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieRuntime: PropTypes.number.isRequired,
  movieReviews: PropTypes.array.isRequired,
  movieDirector: PropTypes.string.isRequired,
  movieActors: PropTypes.array.isRequired,
  movieReleaseDate: PropTypes.number.isRequired,
  movieFullDescription: PropTypes.string.isRequired,
  movieVideoLink: PropTypes.string.isRequired,
  moviePreviewLink: PropTypes.string.isRequired,
  isMyList: PropTypes.bool.isRequired
};
