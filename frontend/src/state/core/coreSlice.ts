import { createSlice } from "@reduxjs/toolkit";

export const coreSlice = createSlice({
  name: "core",
  initialState: {
    langDropdown: false,
  },
  reducers: {
    changeLangDropdown: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes (docs)
      state.langDropdown = !state.langDropdown;
    },
  },
});

const coreReducer = coreSlice.reducer;

export const { changeLangDropdown } = coreSlice.actions;

export default coreReducer;
