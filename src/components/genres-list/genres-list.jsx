import React from "react";
import PropTypes from "prop-types";

const GenresList = (props) => {
  const {films} = props;
  const GENRES_MAXIMUM = 10;

  const genres = [];

  films.map((film) => {
    const genre = film.movieGenre;
    if (!genres.includes(genre)) {
      genres.push(genre);
    }
  });

  return (
    <ul className="catalog__genres-list">
      <li key="0" className="catalog__genres-item catalog__genres-item--active">
        <a href="#" className="catalog__genres-link">All genres</a>
      </li>
      {genres.slice(0, GENRES_MAXIMUM).map((genre, i) => {
        return (
          <li key={i + 1} className="catalog__genres-item">
            <a href="#" className="catalog__genres-link">{genre}</a>
          </li>
        );
      })}
    </ul>
  );
};

GenresList.propTypes = {
  films: PropTypes.array.isRequired
};

export default GenresList;
