import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const MovieSettings = {
  NAME: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  RELEASE_DATE: 2014
};

ReactDOM.render(
    <App
      movieName={MovieSettings.NAME}
      movieGenre={MovieSettings.GENRE}
      movieReleaseDate={MovieSettings.RELEASE_DATE}
    />, document.querySelector(`#root`)
);
