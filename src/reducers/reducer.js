const initialState = {
  filmData: [],
  peopleData: [],
  locationsData: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_FILMS":
      return { filmData: state.filmData + action.payload };
    case "GET_PEOPLE":
      return { filmData: state.peopleData + action.payload };
    case "GET_LOCATIONS":
      return { filmData: state.locationsData + action.payload };
    default:
      return state;
  }
}

export default reducer;
