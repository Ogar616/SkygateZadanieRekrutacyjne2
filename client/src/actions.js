const ADD_CITY = "ADD_CITY";
const CHANGE_INPUT_VALUE = "CHANGE_INPUT_VALUE";
const CLEAR_DATA = "CLEAR_DATA";

const addCity = city => {
  return { type: ADD_CITY, city };
};

const changeInputValue = value => {
  return { type: CHANGE_INPUT_VALUE, value };
};

const clearData = () => {
  return { type: CLEAR_DATA };
};

export { addCity, changeInputValue, clearData };
