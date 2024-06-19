import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toast: {
    visible: null,
    title: "",
    message: "",
  },
};

export const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    throwSuccess: (state, action) => {
      state.toast.visible = action.payload.visible;
      state.toast.title = action.payload.title;
      state.toast.message = action.payload.message;
    },
    throwFailed: (state, action) => {
      state.toast.visible = action.payload.visible;
      state.toast.title = action.payload.title;
      state.toast.message = action.payload.message;
    },
    remove: (state, action) => {
      state.toast.visible = action.payload;
    },
  },
});

export const { throwFailed, throwSuccess, remove } = toastSlice.actions;
export default toastSlice.reducer;
