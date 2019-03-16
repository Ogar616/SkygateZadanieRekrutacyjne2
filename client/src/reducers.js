const initialState = {
  cities: [],
  inputValue: ""
};

const reducer = (state = initialState, action) => {
  const { cities, value, city } = action;
  switch (action.type) {
    case "GET_CITIES":
      return { ...state, cities };
    case "ADD_CITY":
      const newCities = [...state.cities];
      newCities.push(city);
      return { ...state, cities: newCities };
    case "CHANGE_INPUT_VALUE":
      console.log("reducer inputV", value);
      let code;
      switch (value.label) {
        case "Germany":
          code = "GER";
          break;
        case "Poland":
          code = "PL";
          break;
        case "France":
          code = "FR";
          break;
        case "SPAIN":
          code = "ES";
          break;
        default:
          code = "PL";
      }
      return { ...state, inputValue: code };
    case "SET_INPUT_VALUE":
      const newValue = action.inputValue;
      console.log("newI reducer", newValue);
      return { ...state, inputValue: newValue };
    default:
      return state;
  }
};

export default reducer;
