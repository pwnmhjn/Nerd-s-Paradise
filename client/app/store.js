import { configureStore } from "@reduxjs/toolkit";
import toastReducer from "../features/toast/toastSlice";

export const nerdStore = configureStore({
  reducer: toastReducer,
});
