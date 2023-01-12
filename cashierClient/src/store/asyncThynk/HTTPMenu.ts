import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMenu: any = createAsyncThunk("menus/getMenu", async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_PRODUCTION_HOST || "localhost"}:${process.env.REACT_APP_PRODUCTION_PORT || 4000}/api/v1/menu-item`);
  return data;
});
