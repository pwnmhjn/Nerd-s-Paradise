import { combineReducers } from "@reduxjs/toolkit";
import toastReducer from "../features/toast/toastSlice";
import headerReducer from "../features/header/headerSlice";

const rootReducer = combineReducers({
  toastReducer: toastReducer,
  headerReducer: headerReducer,
});

export default rootReducer;
