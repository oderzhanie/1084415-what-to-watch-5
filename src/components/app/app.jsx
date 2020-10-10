import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main";

const App = (props) => {
  const {movieName, movieGenre, movieReleaseDate} = props;

  return (
    <Main
      movieName={movieName}
      movieGenre={movieGenre}
      movieReleaseDate={movieReleaseDate}
    />
  );
};

App.propTypes = {
  movieName: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieReleaseDate: PropTypes.number.isRequired,
};

export default App;
