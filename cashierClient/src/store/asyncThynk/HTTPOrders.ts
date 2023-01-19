import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getOrdersWithPage: any = createAsyncThunk(
  "orders/getOrdersWithPage",
  async (offset: number) => {
    const { data } = await axios.get(
      `${
        process.env.REACT_APP_PRODUCTION_HOST || "http://localhost:4000"
      }/api/v1/orders/` + offset,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin":
            "https://88bc-88-206-109-43.eu.ngrok.io",
          "ngrok-skip-browser-warning": "69420",
        },
      }
    );

    return data;
  }
);

export const getOrders: any = createAsyncThunk("orders/getOrders", async () => {
  const { data } = await axios.get(
    `${
      process.env.REACT_APP_PRODUCTION_HOST || "http://localhost:4000"
    }/api/v1/orders`,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://88bc-88-206-109-43.eu.ngrok.io",
        "ngrok-skip-browser-warning": "69420",
      },
    }
  );
  return data;
});

export const postOrder: any = createAsyncThunk(
  "orders/postOrder",
  async (order) => {
    const { data } = await axios.post(
      `${
        process.env.REACT_APP_PRODUCTION_HOST || "http://localhost:4000"
      }/api/v1/orders`,

      order,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin":
            "https://88bc-88-206-109-43.eu.ngrok.io",
          "ngrok-skip-browser-warning": "69420",
        },
      }
    );

    return data;
  }
);
