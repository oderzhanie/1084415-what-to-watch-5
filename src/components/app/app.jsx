import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import AddReview from "../add-review/add-review";
import MoviePage from "../movie-page/movie-page";
import MyList from "../my-list/my-list";
import Player from "../player/player";
import SignIn from "../sign-in/sign-in";

const App = (props) => {
  const {films} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            films={films}
          />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist">
          <MyList />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReview />
        </Route>
        <Route exact path="/films/:id">
          <MoviePage
            films={films}
            film={films[0]}
          />
        </Route>
        <Route exact path="/player/:id">
          <Player
            film={films[0]}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.array.isRequired
};

export default App;
