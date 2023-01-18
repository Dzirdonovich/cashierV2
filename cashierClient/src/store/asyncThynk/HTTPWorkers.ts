import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getWorkers: any = createAsyncThunk(
  "workers/getWorkers",
  async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_PRODUCTION_HOST || "localhost"}/api/v1/workers`, {headers: {"Access-Control-Allow-Origin": "*"}});
    console.log(data);
    return data;
  }
);
