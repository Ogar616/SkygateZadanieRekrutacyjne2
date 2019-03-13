const initialState = {

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ACTION":
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
