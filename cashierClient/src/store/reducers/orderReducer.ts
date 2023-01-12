import { createSlice } from "@reduxjs/toolkit";
import { IOrder } from "../../models/IOrder";
import { getOrders, getOrdersWithPage } from "../asyncThynk/HTTPOrders";

interface initialState {
  ordersWithPage: IOrder[];
  orders: IOrder[];
}
interface OrderAction {
  payload: IOrder[];
}

const initialState: initialState = {
  ordersWithPage: [],
  orders: [],
};

export const OrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrdersWithPage.pending, (state: initialState) => {});
    builder.addCase(
      getOrdersWithPage.fulfilled,
      (state: initialState, { payload }: OrderAction) => {
        for (let i = 0; i < 12; i++) state.ordersWithPage.pop();

        state.ordersWithPage.push(...payload);
      }
    );
    builder.addCase(
      getOrders.fulfilled,
      (state: initialState, { payload }: OrderAction) => {
        for (let i = 0; i < payload.length; i++) state.orders.pop();

        state.orders.push(...payload);
      }
    );
  },
});
