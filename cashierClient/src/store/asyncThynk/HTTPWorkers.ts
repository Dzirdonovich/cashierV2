import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getWorkers: any = createAsyncThunk(
  "workers/getWorkers",
  async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_PRODUCTION_HOST || "localhost"}:${process.env.REACT_APP_PRODUCTION_PORT || 4000}/api/v1/workers`);
    console.log(data);
    return data;
  }
);
