import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {FILM_SHAPE} from "../../utils/constants.js";

class AddReviewPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      "rating": 3,
      "review-text": ``
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    // alert(`Хэндлер сабмита работает`);
  }

  handleFieldChange(evt) {
    const {name, value} = evt.target;
    // if (name === `rating`) {
    //   const prevRating = document.querySelector(`.rating__input[checked]`);
    //   prevRating.removeAttribute(`checked`);
    //   evt.target.setAttribute(`checked`, ``);
    // }
    this.setState({[name]: value});
    // Вывод результата запаздывает в реакции на один шаг (показывает итог предыдущего шага)
    // То есть стейт обновляется, а рендерятся измененения только при следующем onChange
  }

  render() {
    // const {film} = this.props;
    // const {
    //   movieId,
    // } = film;


    return (
      <div className="add-review">
        <form onSubmit={this.handleSubmit} action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              <input
                onChange={this.handleFieldChange}
                className="rating__input" id="star-1" type="radio" name="rating" value="1"/>
              <label className="rating__label" htmlFor="star-1">Rating 1</label>

              <input
                onChange={this.handleFieldChange}
                className="rating__input" id="star-2" type="radio" name="rating" value="2" />
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input
                onChange={this.handleFieldChange}
                className="rating__input" id="star-3" type="radio" name="rating" value="3" defaultChecked/>
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input
                onChange={this.handleFieldChange}
                className="rating__input" id="star-4" type="radio" name="rating" value="4" />
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input
                onChange={this.handleFieldChange}
                className="rating__input" id="star-5" type="radio" name="rating" value="5" />
              <label className="rating__label" htmlFor="star-5">Rating 5</label>
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              onChange={this.handleFieldChange}
              className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

AddReviewPage.propTypes = {
  film: PropTypes.shape(FILM_SHAPE).isRequired,
};

export default AddReviewPage;
