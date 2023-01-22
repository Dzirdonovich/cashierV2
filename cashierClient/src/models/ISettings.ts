import { PageEnum } from "../enums";

export interface ISettings {
  page: number;
  currentPage: PageEnum;
  stateOrder: number;
  placeOrder: number;
  sizeOrder: number;
  workerId: number;
  workerModal: boolean;

  lastPage: {
    input: number;
    telephone: string;
    name: string;
    money: string;
    keyBoard: boolean;
  };
  keyBoard: {
    upperCase: boolean;
  };
}
