import { PageEnum } from "../enums";

export interface ISettings {
  page: number;
  currentPage: PageEnum;
  stateOrder: number;
  placeOrder: boolean;
  sizeOrder: number;
  workerId: number;
  workerModal: boolean;
  lastPage: {
    input: number;
    telephone: string;
    name: string;
    price: string;
  };
}
