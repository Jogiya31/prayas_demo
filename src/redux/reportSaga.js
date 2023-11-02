import { call, put, takeLatest } from "redux-saga/effects";
import { reportActions } from "./reportSlice";
import { loadNationalKpiCritical } from "../api/api";

//get all tasks
function* handleLoadNationalKpiCritical() {
  try {
    const response = yield call(loadNationalKpiCritical);
    if (response.status === 200) {
      const data = response.data;
      yield put(reportActions.getNationalKpiCriticalSuccess(data));
    } else {
      throw new Error("Somthing went wrong");
    }
  } catch (error) {
    yield put(reportActions.getNationalKpiCriticalFailed(error));
  }
}

export default function* reportSaga() {
  yield takeLatest(
    reportActions.getNationalKpiCritical.type,
    handleLoadNationalKpiCritical
  );
}
