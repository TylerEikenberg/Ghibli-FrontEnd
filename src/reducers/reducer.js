const initialState = {
  filmData: [],
  peopleData: [],
  locationsData: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_FILMS":
      return { filmData: action.payload };
    case "GET_PEOPLE":
      return { peopleData: action.payload };
    case "GET_LOCATIONS":
      return { locationData: action.payload };
    default:
      return state;
  }
}

export default reducer;
