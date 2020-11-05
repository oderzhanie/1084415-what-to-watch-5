import React, {PureComponent} from "react";
import PropTypes from "prop-types";
// import {Redirect} from "react-router-dom";
import SmallMovieCard from "../small-movie-card";

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCardId: null
    };

    this.onCardHover = this.onCardHover.bind(this);
  }

  onCardHover(id) {
    this.setState({
      activeCardId: id
    });
  }

  render() {
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film) => (
          <SmallMovieCard
            film = {film}
            onMouseOver = {this.onCardHover(film.movieId)}
            key = {film.movieId}
          />
        ))}
      </div>
    );
  }
}

MoviesList.propTypes = {
  films: PropTypes.array.isRequired
};

export default MoviesList;
