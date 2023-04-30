import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const themeSlice = createSlice({
  name: "theme",
  initialState: "Light",
  reducers: {
    setTheme: (_, action) => action.payload,
  },
});

export const { setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;

export const selectTheme = (state: RootState) => state.theme;
