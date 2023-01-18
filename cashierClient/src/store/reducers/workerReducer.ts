import { IWorker } from "../../models/IWorker";
import { createSlice } from "@reduxjs/toolkit";
import { getWorkers } from "../asyncThynk/HTTPWorkers";

const initialState: IWorker[] = [];
export const WorkerSlice = createSlice({
  name: "workers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWorkers.fulfilled, (state: IWorker[], { payload }) => {
      state.length = 0;
      state.push(...payload);
      console.log(payload);
    });
  },
});
