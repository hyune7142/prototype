import { combineReducers } from "redux";
import routeReducer from "./route/reducer";
import nendoroidReducer from "./nendoroid/reducer";

const rootReducer = combineReducers({
  route: routeReducer,
  nendoroid: nendoroidReducer,
});

export default rootReducer;
