import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {FILM_SHAPE, FILMS_LIST_LENGTH} from "../../utils/constants.js";
import {getRandomInteger} from "../../utils/utils.js";
import MoviesList from "../movies-list/movies-list";
import {Link} from "react-router-dom";
import {TABS} from "../../utils/constants.js";
import Tabs from "../tabs/tabs";

class MoviePage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: TABS.OVERVIEW
    };

    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(evt) {
    evt.preventDefault();

    this.setState({
      activeTab: evt.target.textContent
    });

    const prevTab = document.querySelector(`.movie-nav__item--active`);
    prevTab.classList.remove(`movie-nav__item--active`);

    const newTab = evt.target.parentNode;
    newTab.classList.add(`movie-nav__item--active`);
  }

  render() {
    const {film, films, onPlayButtonClick} = this.props;
    const similarFilmsNumber = getRandomInteger(1, FILMS_LIST_LENGTH);
    const similarFilms = films.slice(0, similarFilmsNumber);


    const {
      movieName,
      moviePosterImg,
      movieGenre,
      movieReleaseDate
    } = film;

    return (
      <React.Fragment>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header movie-card__head">
              <div className="logo">
                <Link to={{pathname: `/`}} className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </Link>
              </div>

              <div className="user-block">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </div>
            </header>

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{movieName}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{movieGenre}</span>
                  <span className="movie-card__year">{movieReleaseDate}</span>
                </p>

                <div className="movie-card__buttons">
                  <button onClick={(evt) => {
                    evt.preventDefault();
                    onPlayButtonClick();
                  }}
                  className="btn btn--play movie-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </button>
                  <Link to={{pathname: `/films/:id/review`}} className="btn movie-card__button">Add review</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={`img/${moviePosterImg}`} alt={`${movieName}`} width="218" height="327" />
              </div>

              <div className="movie-card__desc">
                <nav className="movie-nav movie-card__nav">
                  <ul className="movie-nav__list">
                    <li className="movie-nav__item movie-nav__item--active">
                      <a onClick={this.handleTabClick}
                        href="#" className="movie-nav__link">Overview</a>
                    </li>
                    <li className="movie-nav__item">
                      <a onClick={this.handleTabClick}
                        href="#" className="movie-nav__link">Details</a>
                    </li>
                    <li className="movie-nav__item">
                      <a onClick={this.handleTabClick}
                        href="#" className="movie-nav__link">Reviews</a>
                    </li>
                  </ul>
                </nav>

                <Tabs
                  film={film}
                  activeTab={this.state.activeTab}
                />
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <MoviesList
              filmsList = {similarFilms}
            />
          </section>

          <footer className="page-footer">
            <div className="logo">
              <a href="main.html" className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

MoviePage.propTypes = {
  film: PropTypes.shape(FILM_SHAPE).isRequired,
  films: PropTypes.array.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired
};

export default MoviePage;
