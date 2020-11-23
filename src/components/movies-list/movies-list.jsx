import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCardId: ``
    };

    this.handleCardHover = this.handleCardHover.bind(this);
  }

  handleCardHover() {
    // Должен потом менять стейт
  }

  render() {
    const {filmsList} = this.props;

    return (
      <div className="catalog__movies-list">
        {filmsList.map((film, i) => (
          <SmallMovieCard
            film = {filmsList[i]}
            key = {film.movieId}
            onMouseOver = {this.handleCardHover}
          />
        ))}
      </div>
    );
  }
}

MoviesList.propTypes = {
  filmsList: PropTypes.array.isRequired,
};

export default MoviesList;
