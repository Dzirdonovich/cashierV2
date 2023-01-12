import { createSlice } from "@reduxjs/toolkit";
import { IMenu } from "../../models/IMenu";
import { getMenu } from "../asyncThynk/HTTPMenu";
import { ICurrentOrder } from "../../models/ICurrentOrder";
import { postOrder } from "../asyncThynk/HTTPOrders";
import { INCREMENT } from "../../consts";
const initialState: ICurrentOrder = {
  Orders: [],
  Current: {
    category: "",
    name: "",
    price: 0,
    ingredients: [],
  },
};

export const CurrentOrderSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    addItemToCurrent(state, { payload }) {
      state.Current.name = payload.name;
      state.Current.category = payload.category;
      state.Current.price = payload.price;
      state.Current.ingredients = payload.ingredients;
    },
    addItemToOrder(state, { payload }) {
      console.log(payload);
      const order = state.Orders.find((order) => {
        if (
          order.category == payload.category &&
          order.name == payload.name &&
          order.size == payload.size
        ) {
          order.count++;
          order.price += payload.price;
          return order;
        }
      });
      if (order) {
        console.log(1);
      } else {
        state.Orders.push({ ...payload, count: 1 });
      }
    },
    clearCurrentOrder(state) {
      state.Orders.length = 0;
      state.Current = initialState.Current;
    },
    changeCountOrder(state, { payload }) {
      if (payload.action === INCREMENT) {
        {
          state.Orders[payload.index].count++;

          payload.menu.map((item: IMenu) => {
            if (item.name == state.Orders[payload.index].name) {
              if (state.Orders[payload.index].size === 25) {
                state.Orders[payload.index].price = Math.floor(
                  item.price * state.Orders[payload.index].count
                );
              }
              if (state.Orders[payload.index].size === 30) {
                state.Orders[payload.index].price = Math.floor(
                  item.price * 1.5 * state.Orders[payload.index].count
                );
              }
              if (state.Orders[payload.index].size === 35) {
                state.Orders[payload.index].price = Math.floor(
                  item.price * 2 * state.Orders[payload.index].count
                );
              }
            }
          });
        }
      } else {
        state.Orders[payload.index].count--;
        if (state.Orders[payload.index].count === 0) {
          state.Orders.splice(payload.index, 1);
        } else {
          payload.menu.map((item: IMenu) => {
            if (item.name == state.Orders[payload.index].name) {
              if (state.Orders[payload.index].size === 25) {
                state.Orders[payload.index].price = Math.floor(
                  item.price * state.Orders[payload.index].count
                );
              }
              if (state.Orders[payload.index].size === 30) {
                state.Orders[payload.index].price = Math.floor(
                  item.price * 1.5 * state.Orders[payload.index].count
                );
              }
              if (state.Orders[payload.index].size === 35) {
                state.Orders[payload.index].price = Math.floor(
                  item.price * 2 * state.Orders[payload.index].count
                );
              }
            }
          });
        }
      }
    },
  },
});

export const {
  addItemToCurrent,
  addItemToOrder,
  clearCurrentOrder,
  changeCountOrder,
} = CurrentOrderSlice.actions;
export default CurrentOrderSlice.reducer;
