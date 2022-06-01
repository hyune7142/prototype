import * as actionType from "./constants";

const initState = {
  list: [],
};

const nendoroidReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.SET_NENDOROID:
      return state;
    default:
      return state;
  }
};

export default nendoroidReducer;
