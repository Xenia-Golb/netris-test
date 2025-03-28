import { all } from "redux-saga/effects";
import { watchAnalyticsSaga } from "./analyticsSaga";
import { watchPlayerSaga } from "./playerSaga";

export default function* rootSaga() {
  yield all([watchAnalyticsSaga(), watchPlayerSaga()]);
}
