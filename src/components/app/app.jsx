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
        <Route exact
          path="/"
          render={({history}) => (
            <Main
              films={films}
              onPlayButtonClick={() => history.push(`/player/:id`)}
            />
          )}>
        </Route>

        <Route exact path="/login">
          <SignIn />
        </Route>

        <Route exact path="/mylist">
          <MyList
            films={films}
          />
        </Route>

        <Route exact path="/films/:id/review">
          <AddReview
            film={films[5]}
          />
        </Route>

        <Route exact
          path="/films/:id"
          render={({history}) => (
            <MoviePage
              film={films[1]}
              films={films}
              onPlayButtonClick={() => history.push(`/player/:id`)}
            />
          )}
        >

        </Route>

        <Route exact path="/player/:id">
          <Player
            film={films[3]}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.array.isRequired,
};

export default App;
