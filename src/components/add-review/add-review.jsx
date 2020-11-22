import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {FILM_SHAPE} from "../../utils/constants.js";
import AddReviewPage from "../add-review-page/add-review-page";
import {Link} from "react-router-dom";

class AddReview extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      reviewId: ``,
      author: ``,
      date: ``,
      text: ``,
      rating: ``
    };
  }

  render() {
    const {film} = this.props;
    const {
      // movieId,
      movieName,
      moviePreviewImg
    } = film;

    return (
      <React.Fragment>
        <section className="movie-card movie-card--full">
          <div className="movie-card__header">
            <div className="movie-card__bg">
              <img src={`img/${moviePreviewImg}`} alt={movieName} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header">
              <div className="logo">
                <Link to={{pathname: `/`}}
                  className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </Link>
              </div>

              <nav className="breadcrumbs">
                <ul className="breadcrumbs__list">
                  <li className="breadcrumbs__item">
                    <Link to={{pathname: `/films/:id`}} className="breadcrumbs__link">{movieName}</Link>
                  </li>
                  <li className="breadcrumbs__item">
                    <a className="breadcrumbs__link">Add review</a>
                  </li>
                </ul>
              </nav>

              <div className="user-block">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </div>
            </header>

            <div className="movie-card__poster movie-card__poster--small">
              <img src={`img/${moviePreviewImg}`} alt={movieName} width="218" height="327" />
            </div>
          </div>

          <AddReviewPage
            film = {film}
          />
        </section>
      </React.Fragment>
    );
  }
}

AddReview.propTypes = {
  film: PropTypes.shape(FILM_SHAPE).isRequired,
};

export default AddReview;
