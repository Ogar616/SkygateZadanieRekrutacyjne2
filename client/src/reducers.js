const initialState = {
cities: [],
descriptions: []
};

const reducer = (state = initialState, action) => {
  const { cities, description } = action;
  switch (action.type) {
    case "GET_CITIES":
      return { ...state, cities };
    case "GET_DESCRIPTION":
      return { ...state, description };
    default:
      return state;
  }
};

export default reducer;
