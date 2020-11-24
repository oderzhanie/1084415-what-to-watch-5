import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import withVideoPlayer from "../../hocs/with-video-player/with-video-player";

const SmallMovieCardWrapped = withVideoPlayer(SmallMovieCard);

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {filmsList} = this.props;

    return (
      <div className="catalog__movies-list">
        {filmsList.map((film, i) => (
          <SmallMovieCardWrapped
            film = {filmsList[i]}
            key = {film.movieId}
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
