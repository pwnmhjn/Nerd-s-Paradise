import { configureStore } from "@reduxjs/toolkit";
// import toastReducer from "../features/toast/toastSlice";
import rootReducer from "./reducer";
export const nerdStore = configureStore({
  reducer: rootReducer,
});
