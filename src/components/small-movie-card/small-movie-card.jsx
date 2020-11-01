import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    // this.state = {
    //  стейт в этом компоненте не нужен?
    // };
  }

  render() {
    const {film, key, isCardActive} = this.props; // isActive тоже через пропсы передается?
    const {
      // isActive, // Меняет класс small-movie-card на .small-movie-card:hover
      movieName,
      moviePoster
    } = film;

    const actualClassName = isCardActive ? `small-movie-card:hover catalog__movies-card` : `small-movie-card catalog__movies-card`;

    return (
      <article key={key} className={actualClassName}>
        <div className="small-movie-card__image">
          <img src={moviePoster} alt={movieName} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{movieName}</a>
        </h3>
      </article>
    );
  }
}

SmallMovieCard.propTypes = {
  film: PropTypes.shape({
    movieId: PropTypes.number.isRequired,
    movieName: PropTypes.string.isRequired,
    moviePoster: PropTypes.string.isRequired,
    movieRating: PropTypes.number.isRequired,
    movieRatingVerbal: PropTypes.string.isRequired,
    movieShortDescription: PropTypes.string.isRequired,
    movieGenre: PropTypes.string.isRequired,
    movieRuntime: PropTypes.number.isRequired,
    movieReviews: PropTypes.array.isRequired,
    movieDirector: PropTypes.string.isRequired,
    movieActors: PropTypes.array.isRequired,
    movieReleaseDate: PropTypes.number.isRequired,
    movieFullDescription: PropTypes.string.isRequired,
    movieVideo: PropTypes.string.isRequired,
    isMyList: PropTypes.bool
  }).isRequired,
  key: PropTypes.string.isRequired,
  isCardActive: PropTypes.bool
};

export default SmallMovieCard;
