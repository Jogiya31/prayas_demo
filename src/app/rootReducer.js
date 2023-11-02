import { combineReducers } from "@reduxjs/toolkit";
import reportReducer from "../redux/reportSlice";

const rootReducer = combineReducers({
  report: reportReducer,
});

export default rootReducer;
