import {getRandomInteger, getRandomName, generateId, getRandomDescription} from "../utils/utils.js";
import {TEXT, REVIEWS_MAX, REVIEWS_START_YEAR, REVIEWS_END_YEAR, START_MONTH, END_MONTH, START_DATE, END_DATE, RATING_MIN, RATING_MAX} from "../utils/films.js";


const generateDate = () => {
  const releaseDate = new Date(getRandomInteger(REVIEWS_START_YEAR, REVIEWS_END_YEAR), getRandomInteger(START_MONTH, END_MONTH), getRandomInteger(START_DATE, END_DATE));
  return releaseDate;
};


const generateReview = (filmId) => {
  const reviewDate = generateDate();
  reviewDate.setDate(getRandomInteger(START_DATE, END_DATE));
  reviewDate.setMonth(getRandomInteger(START_MONTH, END_MONTH));
  reviewDate.setUTCFullYear(getRandomInteger(REVIEWS_START_YEAR, REVIEWS_END_YEAR));

  return {
    filmId,
    reviewId: generateId(),
    author: getRandomName(),
    date: reviewDate,
    text: getRandomDescription(TEXT),
    rating: `${getRandomInteger(RATING_MIN, RATING_MAX)}.${getRandomInteger(RATING_MIN, RATING_MAX)}`,
  };

};

export const getReviewsArray = (filmId) => {
  const reviewsLength = getRandomInteger(0, REVIEWS_MAX);
  const reviewsArray = [];

  for (let i = 0; i < reviewsLength; i++) {
    const review = generateReview(filmId);
    reviewsArray.push(review);
  }

  return reviewsArray;
};
