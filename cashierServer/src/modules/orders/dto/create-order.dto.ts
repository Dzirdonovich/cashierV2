import { CreateOrderitemDto } from '../../orderitem/dto/create-orderitem.dto';

export class CreateOrderDto {
  readonly Order: {
    readonly client: string;
    readonly place: number;
    readonly payment: number;
    readonly telephone: string;
    readonly money: number;
  };
  readonly OrderItems: CreateOrderitemDto[];

  readonly workerId: number;
}
