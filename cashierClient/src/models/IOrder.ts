import { IWorker } from "./IWorker";

export interface IOrder {
  id: number;
  client: string;
  place: number;
  price: number;
  status: string;
  OrderItemRel: [];
  payment: number;
  number: number;
  workerId: number;
  createdAt: Date;
  updatedAt: Date;
  worker: IWorker;
  telephone: string;
  money: number;
}
