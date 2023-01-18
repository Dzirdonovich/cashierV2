export interface IOrder {
  id: number;
  client: string;
  place: number;
  price: number;
  status: string;
  OrderItem: [];
  payment: number;
  number: number;
  workerId: number;
  createdAt: Date;
  updatedAt: Date;
}
