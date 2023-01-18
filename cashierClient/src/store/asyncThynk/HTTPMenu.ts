import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMenu: any = createAsyncThunk("menus/getMenu", async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_PRODUCTION_HOST || "localhost"}/api/v1/menu-item`, {headers: {"Access-Control-Allow-Origin": "*"}});
  return data;
});
