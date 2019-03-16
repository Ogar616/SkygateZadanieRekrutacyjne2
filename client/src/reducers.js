const initialState = {
  cities: [],
  descriptions: [],
  inputValue: ""
};

const reducer = (state = initialState, action) => {
  const { cities, inputValue, city } = action;
  switch (action.type) {
    case "GET_CITIES":
      return { ...state, cities };
    case "ADD_CITY":
    console.log("!!!!", city);
      const newCities = [...state.cities];
      newCities.push(city);
      return { ...state, cities: newCities };
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
