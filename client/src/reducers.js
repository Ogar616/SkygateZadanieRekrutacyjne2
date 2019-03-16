const initialState = {
  cities: [],
  inputValue: "PL"
};

const reducer = (state = initialState, action) => {
  const { value, city } = action;
  switch (action.type) {
    case "ADD_CITY":
      const newCities = [...state.cities];
      newCities.push(city);
      return { ...state, cities: newCities };
    case "CHANGE_INPUT_VALUE":
      console.log("reducer inputV", value);
      switch (value.label) {
        case "Germany":
          return { ...state, inputValue: "GER" };
        case "Poland":
          return { ...state, inputValue: "PL" };
        case "France":
          return { ...state, inputValue: "FR" };
        case "Spain":
          return { ...state, inputValue: "ES" };
        default:
          return { ...state, inputValue: "PL" };
      }
    default:
      return state;
  }
};

export default reducer;
