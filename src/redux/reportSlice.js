import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loader: false,
  data: [],
  success: false,
};

const reportSlice = createSlice({
  name: "report",
  initialState,
  reducers: {
    getNationalKpiCritical(state) {
      state.loader = true;
    },
    getNationalKpiCriticalSuccess(state, action) {
      state.loader = false;
      state.success = true;
      state.data = action.payload;
    },
    getNationalKpiCriticalFailed(state, action) {
      state.loader = false;
      state.success = false;
    },

    clearData(state) {
      state.loader = false;
      state.success = false;
    },
  },
});

//Actions
export const reportActions = reportSlice.actions;

//export reducer
const reportReducer = reportSlice.reducer;
export default reportReducer;
