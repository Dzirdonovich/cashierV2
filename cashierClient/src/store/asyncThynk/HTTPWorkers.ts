import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getWorkers: any = createAsyncThunk(
  "workers/getWorkers",
  async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_PRODUCTION_HOST || "localhost"}/api/v1/workers`,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin":
            "https://88bc-88-206-109-43.eu.ngrok.io",
          "ngrok-skip-browser-warning": "69420",
        },
      }
    );
    console.log(data);
    return data;
  }
);
