import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

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

export const selectLangDropdown = (state: RootState) => state.core.langDropdown

export const { changeLangDropdown } = coreSlice.actions;

export default coreReducer;
