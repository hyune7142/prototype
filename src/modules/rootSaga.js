import { all } from "redux-saga/effects";
import nendoroidSaga from "./nendoroid/saga";

export default function* rootSaga() {
  yield all([nendoroidSaga()]);
}
