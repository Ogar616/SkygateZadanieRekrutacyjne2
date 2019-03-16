const initialState = {
  cities: [],
  descriptions: [],
  inputValue: ""
};

const reducer = (state = initialState, action) => {
  const { cities, inputValue, locations, descriptions } = action;
  switch (action.type) {
    case "GET_CITIES":
      return { ...state, cities };
    case "GET_DESCRIPTIONS":
      console.log("loc", descriptions);
      return { ...state, descriptions };
    case "GET_INPUT_VALUE":
      console.log("reducer inputV", state.inputValue);
      return { ...state, inputValue };
    case "SET_INPUT_VALUE":
      const newValue = action.inputValue;
      console.log("newI reducer", newValue);
      return { ...state, inputValue: newValue };
    default:
      return state;
  }
};

export default reducer;
