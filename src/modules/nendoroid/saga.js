import { takeLatest, put, call } from "redux-saga/effects";
import { Axios } from "utils/AxiosFunc";
import * as actionType from "./constants";

export function* getNendoroid() {
  const list = yield call(Axios.get, "/nendoroid");
  if (list) {
    yield put({
      type: actionType.SET_NENDOROID,
      list,
    });
  } else {
    // API 개발전에 임시로 더미데이터 이용할거임
    yield put({
      type: actionType.SET_NENDOROID,
      list,
    });
  }
}

export default function* nendoroidSaga() {
  yield takeLatest(actionType.GET_NENDOROID, getNendoroid);
}
