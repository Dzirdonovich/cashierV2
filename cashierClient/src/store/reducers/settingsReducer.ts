import { ISettings } from "../../models/ISettings";
import { createSlice } from "@reduxjs/toolkit";
import { PageEnum } from "../../enums";
import { INCREMENT } from "../../consts";

const initialState: ISettings = {
  page: 1,
  currentPage: PageEnum.action,
  stateOrder: 0,
  placeOrder: 0,
  sizeOrder: 0,
  workerId: 1,
  workerModal: false,
  lastPage: {
    input: 0,
    telephone: "",
    name: "",
    money: "",
    keyBoard: false,
  },
};

export const SettingSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setPage(state, { payload }) {
      state.page = payload;
    },
    setCurrentPage(state, { payload }) {
      state.currentPage = payload;
    },
    setStateOrder(state, { payload }) {
      state.stateOrder = payload;
    },
    setPlaceOrder(state, { payload }) {
      payload === INCREMENT ? (state.placeOrder = 0) : (state.placeOrder = 1);
    },
    setSizeOrder(state, { payload }) {
      state.sizeOrder = payload;
    },
    setWorkerModal(state) {
      state.workerModal = !state.workerModal;
    },
    setWorkerId(state, { payload }) {
      state.workerId = payload.id;
    },
    setInputLastPage(state, { payload }) {
      state.lastPage.input = payload;
    },
    setTelephoneLastPage(state, { payload }) {
      state.lastPage.telephone = payload;
    },
    setNameLastPage(state, { payload }) {
      state.lastPage.name = payload;
    },
    setPriceLastPage(state, { payload }) {
      state.lastPage.money = payload;
    },
    setKeyBoard(state) {
      state.lastPage.keyBoard = !state.lastPage.keyBoard;
    },
    clearSettings(state) {
      state.stateOrder = initialState.stateOrder;
      state.currentPage = initialState.currentPage;
    },
  },
});

export const {
  setPage,
  setCurrentPage,
  setStateOrder,
  setPlaceOrder,
  setSizeOrder,
  setWorkerModal,
  setWorkerId,
  setInputLastPage,
  setTelephoneLastPage,
  setNameLastPage,
  setPriceLastPage,
  clearSettings,
  setKeyBoard,
} = SettingSlice.actions;
export default SettingSlice.reducer;
