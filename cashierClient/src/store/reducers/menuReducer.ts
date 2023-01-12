import { createSlice } from "@reduxjs/toolkit";
import { IMenu } from "../../models/IMenu";
import { getMenu } from "../asyncThynk/HTTPMenu";
const initialState: IMenu[] = [];

export const MenuSlicer = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMenu.fulfilled, (state: IMenu[], { payload }) => {
      state.length = 0;
      state.push(...payload);
    });
  },
});
