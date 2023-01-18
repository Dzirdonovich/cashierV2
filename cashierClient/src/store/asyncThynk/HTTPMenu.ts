import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMenu: any = createAsyncThunk("menus/getMenu", async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_PRODUCTION_HOST || "localhost"}/api/v1/menu-item`,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://88bc-88-206-109-43.eu.ngrok.io",
      },
    }
  );
  return data;
});
