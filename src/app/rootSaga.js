import { all } from "redux-saga/effects";
import reportSaga from "../redux/reportSaga";

export default function* rootSaga() {
  yield all([reportSaga()]);
}
