import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {FILM_SHAPE} from "../../utils/constants.js";
import {TABS} from "../../utils/constants.js";
import moment from "moment";


const Tabs = (props) => {

  const {film, activeTab} = props;

  const {
    movieName,
    moviePosterImg,
    movieRating,
    movieRatingVerbal,
    movieScoresCount,
    movieGenre,
    movieReviews,
    movieDirector,
    movieActors,
    movieReleaseDate,
    movieFullDescription,
    movieRuntime
  } = film;

  const actorsList = movieActors.join(`, `);

  const getRunTime = (runtime) => {
    const runtimeHours = Math.trunc(moment.duration(runtime, `m`).asHours()); // Переделать потом на пересчет из секунд
    const runtimeMinutes = moment.duration(runtime % 60, `m`).asMinutes();

    if (runtimeHours === 0) {
      return (
        `${runtimeMinutes}m`
      );
    } else {
      return (
        `${runtimeHours}h ${runtimeMinutes}m`
      );
    }
  };

  const reviewDate = (date) => {
    return moment(date).format(`MMMM D, Y`);
  };

  const getOddReviews = () => {
    const clonedReviews = movieReviews.slice();
    return clonedReviews.filter((elem) => (clonedReviews.indexOf(elem) % 2 === 0));
  };
  const oddReviews = getOddReviews();

  const getEvenReviews = () => {
    const clonedReviews = movieReviews.slice();
    return clonedReviews.filter((elem) => (clonedReviews.indexOf(elem) % 2 === 1));
  };
  const evenReviews = getEvenReviews();


  const ActiveOverview = () => {
    return (
      <React.Fragment>
        <div className="movie-rating">
          <div className="movie-rating__score">{movieRating}</div>
          <p className="movie-rating__meta">
            <span className="movie-rating__level">{movieRatingVerbal}</span>
            <span className="movie-rating__count">{movieScoresCount} ratings</span>
          </p>
        </div>

        <div className="movie-card__text">
          <p>{movieFullDescription}</p>
          <p className="movie-card__director"><strong>Director: {movieDirector}</strong></p>
          <p className="movie-card__starring"><strong>Starring: {movieActors.join(`, `)} and other</strong></p>
        </div>
      </React.Fragment>
    );
  };

  const ActiveDetails = () => {
    return (
      <React.Fragment>
        <div className="movie-card__text movie-card__row">
          <div className="movie-card__text-col">
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Director</strong>
              <span className="movie-card__details-value">{movieDirector}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Starring</strong>
              <span className="movie-card__details-value">
                {actorsList}
              </span>
            </p>
          </div>

          <div className="movie-card__text-col">
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Run Time</strong>
              <span className="movie-card__details-value">{getRunTime(movieRuntime)}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Genre</strong>
              <span className="movie-card__details-value">{movieGenre}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Released</strong>
              <span className="movie-card__details-value">{movieReleaseDate}</span>
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  };

  const ActiveReviews = () => {
    return (
      <React.Fragment>
        <div className="movie-card__reviews movie-card__row">
          <div className="movie-card__reviews-col">

            {oddReviews.map((review) => {
              return (
                <div key={review.reviewId} id={review.reviewId} className="review">
                  <blockquote className="review__quote">
                    <p className="review__text">{review.text}</p>

                    <footer className="review__details">
                      <cite className="review__author">{review.author}</cite>
                      <time className="review__date" dateTime="2016-12-24">{reviewDate(review.date)}</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">{review.rating}</div>
                </div>
              );
            })}
          </div>

          <div className="movie-card__reviews-col">
            {evenReviews.map((review) => {
              return (
                <div key={review.reviewId} id={review.reviewId} className="review">
                  <blockquote className="review__quote">
                    <p className="review__text">{review.text}</p>

                    <footer className="review__details">
                      <cite className="review__author">{review.author}</cite>
                      <time className="review__date" dateTime="2016-12-24">{reviewDate(review.date)}</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">{review.rating}</div>
                </div>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  };


  if (activeTab === TABS.OVERVIEW) {
    return <ActiveOverview />;
  } else if (activeTab === TABS.DETAILS) {
    return <ActiveDetails />;
  } else {
    return <ActiveReviews />;
  }
};

// Tabs.propTypes = {
//   film: PropTypes.shape(FILM_SHAPE).isRequired,
// };

export default Tabs;
