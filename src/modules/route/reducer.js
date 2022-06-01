import * as actionType from "./constants";

const initState = {
  location_history: [],
};

const routeReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.SET_HISTORY:
      return state;
    default:
      return state;
  }
};

export default routeReducer;
