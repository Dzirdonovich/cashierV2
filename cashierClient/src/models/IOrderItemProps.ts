import { Order } from "./ICurrentOrder";
import { IWorker } from "./IWorker";

export interface IOrderItemProps {
  client: string;
  number: number;
  place: number;
  createdAt: Date;
  status: string;
  price: number;
  OrderItemRel: Order[];
  worker: IWorker;
  telephone: string;
  money: number;
}
