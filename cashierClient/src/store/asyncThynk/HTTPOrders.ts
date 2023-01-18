import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ICurrentOrder } from "../../models/ICurrentOrder";
import { IIngredient } from "../../models/IIngredient";

export const getOrdersWithPage: any = createAsyncThunk(
  "orders/getOrdersWithPage",
  async (offset: number) => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_PRODUCTION_HOST || "localhost"}/api/v1/orders/` +
        offset,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin":
            "https://88bc-88-206-109-43.eu.ngrok.io",
        },
      }
    );

    return data;
  }
);

interface Order {
  name: string;
  ingredients: IIngredient[];
  category: string;
  price: number;
  size: number;
}

export const getOrders: any = createAsyncThunk("orders/getOrders", async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_PRODUCTION_HOST || "localhost"}/api/v1/orders`,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://88bc-88-206-109-43.eu.ngrok.io",
      },
    }
  );
  return data;
});

export const postOrder: any = createAsyncThunk(
  "orders/postOrder",
  async (order) => {
    const { data } = await axios.post(
      `${process.env.REACT_APP_PRODUCTION_HOST || "localhost"}/api/v1/orders`,

      order,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin":
            "https://88bc-88-206-109-43.eu.ngrok.io",
        },
      }
    );

    return data;
  }
);
