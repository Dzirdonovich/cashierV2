import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ICurrentOrder } from "../../models/ICurrentOrder";
import { IIngredient } from "../../models/IIngredient";

export const getOrdersWithPage: any = createAsyncThunk(
  "orders/getOrdersWithPage",
  async (offset: number) => {
    const { data } = await axios.get(
      "localhost:4000/api/v1/orders/" + offset
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
  const { data } = await axios.get("localhost:4000/api/v1/orders/");
  return data;
});

export const postOrder: any = createAsyncThunk(
  "orders/postOrder",
  async (order) => {
    const { data } = await axios.post(
        "localhost:4000/api/v1/orders/",

      order,
        

    );

    return data;

  }
);
