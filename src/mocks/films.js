import {getRandomInteger, getRandomElem, getRandomName, getBoolean, generateId, getRandomDescription} from "../utils/utils.js";
import {TEXT, GENRES, TITLES, POSTERS, FILMS_START_YEAR, FILMS_END_YEAR, ELEMENTS_MIN, ELEMENTS_MAX, START_MONTH, END_MONTH, START_DATE, END_DATE, START_MINUTES, END_MINUTES, RATING_MIN, RATING_MAX} from "../utils/films.js";
import {getReviewsArray} from "../mocks/reviews.js";

const FILMS_NUMBER = 8;

const getRandomElements = () => {
  const elements = [];
  const number = getRandomInteger(ELEMENTS_MIN, ELEMENTS_MAX);
  for (let i = 0; i < number - 1; i++) {
    const elem = getRandomName();
    elements.push(elem);
  }

  return elements;
};

const generateDate = () => {
  const releaseDate = new Date(getRandomInteger(FILMS_START_YEAR, FILMS_END_YEAR), getRandomInteger(START_MONTH, END_MONTH), getRandomInteger(START_DATE, END_DATE));
  return releaseDate;
};

const generateFilm = () => {
  const filmTitle = getRandomElem(TITLES);
  // const description = TEXT;
  const filmPoster = `../../img/${getRandomElem(POSTERS)}`;
  const filmDate = generateDate();
  filmDate.setDate(getRandomInteger(START_DATE, END_DATE));
  filmDate.setMonth(getRandomInteger(START_MONTH, END_MONTH));
  filmDate.setUTCFullYear(getRandomInteger(FILMS_START_YEAR, FILMS_END_YEAR));
  filmDate.setMinutes(getRandomInteger(START_MINUTES, END_MINUTES));

  const movieId = generateId();
  const movieRating = Number(`${getRandomInteger(RATING_MIN, RATING_MAX)}.${getRandomInteger(RATING_MIN, RATING_MAX)}`);
  const movieRatingVerbal = movieRating > 7 ? `Excellent` : `Very good`;

  return {
    movieId,
    movieName: filmTitle,
    moviePosterImg: filmPoster,
    moviePreviewImg: filmPoster,
    movieBgImg: filmPoster,
    movieBgColor: `#ffffff`,
    movieRating,
    movieRatingVerbal,
    movieScoresCount: getRandomInteger(START_MINUTES, END_MINUTES),
    movieGenre: getRandomElem(GENRES),
    movieRuntime: getRandomInteger(START_MINUTES, END_MINUTES),
    movieReviews: getReviewsArray(movieId),
    movieDirector: getRandomName(),
    movieActors: getRandomElements(),
    movieReleaseDate: filmDate.getFullYear(),
    movieFullDescription: getRandomDescription(TEXT),
    movieVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    moviePreviewLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    isMyList: getBoolean()
  };
};

const films = [];

for (let i = 0; i < FILMS_NUMBER; i++) {
  const film = generateFilm();
  films.push(film);
}

export default films;
