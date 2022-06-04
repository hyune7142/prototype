import * as actionType from "./constants";

export const getNendoroid = () => ({
  type: actionType.GET_NENDOROID,
});

export const setNendoroid = (list) => ({
  type: actionType.SET_NENDOROID,
  list,
});
