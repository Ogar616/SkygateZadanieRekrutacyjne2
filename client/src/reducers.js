const initialState = {
  cities: [],
  inputValue: localStorage.inputValue
};

const myStorage = localStorage;

const reducer = (state = initialState, action) => {
  const { value, city } = action;
  switch (action.type) {
    case "ADD_CITY":
      const newCities = [...state.cities];
      newCities.push(city);
      return { ...state, cities: newCities };
    case "CHANGE_INPUT_VALUE":
      if (value) {
        switch (value.label) {
          case "Germany":
            myStorage.inputValue = "DE";
            return { ...state, inputValue: "DE" };
          case "Poland":
            myStorage.inputValue = "PL";
            return { ...state, inputValue: "PL" };
          case "France":
            myStorage.inputValue = "FR";
            return { ...state, inputValue: "FR" };
          case "Spain":
            myStorage.inputValue = "ES";
            return { ...state, inputValue: "ES" };
          default:
            return { ...state, inputValue: localStorage.inputValue };
        }
      }
      break;
    case "CLEAR_DATA":
      return { ...state, cities: [] };
    default:
      return state;
  }
};

export default reducer;
