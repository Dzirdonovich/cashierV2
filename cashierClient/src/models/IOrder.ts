export interface IOrder {
  id: number;
  client: string;
  place: number;
  price: number;
  status: string;
  OrderItem: string;
  payment: number;
  number: number;
  workerId: number;
  createdAt: Date;
  updatedAt: Date;
}
