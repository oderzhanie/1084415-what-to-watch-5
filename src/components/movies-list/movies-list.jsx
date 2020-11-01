import React, {PureComponent} from "react";
import PropTypes from "prop-types";
// import {Redirect} from "react-router-dom";
import {SmallMovieCard} from "../small-movie-card";


class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isCardActive: false // В стейте компонента должна быть активная карточка с фильмом или можно так?
    };

    this.onCardHover = this.onCardHover.bind(this);
  }

  onCardHover() {
    this.setState({
      isCardActive: true
    });
  }

  render() {
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film) => (
          <SmallMovieCard
            film = {film}
            onMouseOver = {this.onCardHover}
            key = {film.movieId.toString()}
          />
        ))}
      </div>
    );
  }
}

MoviesList.propTypes = {
  SmallMovieCard: PropTypes.objectOf(SmallMovieCard).isRequired, // Нужен проп на компонент?
  films: PropTypes.array(PropTypes.shape({
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
    isMyList: PropTypes.bool.isRequired
  })).isRequired
};

export default MoviesList;
