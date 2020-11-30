import {extend} from "../utils/utils.js";
import {ActionType} from "./action.js";

const initialState = {
  filter: `all`,
  films: `films`, // В каком виде здесь хранить массив?
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case ActionType.CHANGE_FILTER:
      // return extend(state, {
      //   step: state.step + action.payload,
      // });

    // case ActionType.FILTER_FILMS:
    //   return extend(state, {
    //     mistakes: state.mistakes + action.payload,
    //   });
  }

  return state;
};


export {reducer};
