import { all, fork } from "redux-saga/effects";
import unitSaga from "./unitSaga";

export default function* rootSaga() {
  yield all([fork(unitSaga)]);
}