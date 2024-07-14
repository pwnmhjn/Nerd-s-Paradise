import { configureStore } from "@reduxjs/toolkit";
// import toastReducer from "../features/toast/toastSlice";
import rootReducer from "./rootReducer.js";
export const nerdStore = configureStore({
  reducer: rootReducer,
});
