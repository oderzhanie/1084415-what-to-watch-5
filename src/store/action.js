export const ActionType = {
  CHANGE_FILTER: `CHANGE_FILTER`,
  FILTER_FILMS: `FILTER_FILMS`,
};

export const ActionCreator = {
  changeFilter: (filter) => ({
    type: ActionType.CHANGE_FILTER,
    payload: filter,
  }),
  filterFilms: (filter) => ({
    type: ActionType.FILTER_FILMS,
    payload: filter,
  })
};
