import { configureStore } from "@reduxjs/toolkit";
import { OrderSlice } from "./reducers/orderReducer";
import { SettingSlice } from "./reducers/settingsReducer";
import { MenuSlicer } from "./reducers/menuReducer";
import { CurrentOrderSlice } from "./reducers/currentOrderReducer";
import { WorkerSlice } from "./reducers/workerReducer";

export const store = configureStore({
  reducer: {
    order: OrderSlice.reducer,
    settings: SettingSlice.reducer,
    menu: MenuSlicer.reducer,
    currentOrder: CurrentOrderSlice.reducer,
    worker: WorkerSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
