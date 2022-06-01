import * as actionType from "./constants";

export const setLocationHistory = (location) => ({
  type: actionType.SET_LOCATION_HISTORY,
  location,
});
