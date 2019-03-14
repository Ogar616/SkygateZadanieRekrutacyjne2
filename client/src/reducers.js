const initialState = {
cities: []
};

const reducer = (state = initialState, action) => {
  const { cities } = action;
  switch (action.type) {
    case "GET_CITIES":
      return { ...state, cities };
    default:
      return state;
  }
};

export default reducer;
