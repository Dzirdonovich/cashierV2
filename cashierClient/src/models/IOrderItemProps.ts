export interface IOrderItemProps {
  client: string;
  number: number;
  place: number;
  createdAt: Date;
  status: string;
  price: number;
  orderItem: [{}];
}
