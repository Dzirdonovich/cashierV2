import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getWorkers: any = createAsyncThunk(
  "workers/getWorkers",
  async () => {
    const { data } = await axios.get("http://localhost:4000/api/v1/workers");
    console.log(data);
    return data;
  }
);
