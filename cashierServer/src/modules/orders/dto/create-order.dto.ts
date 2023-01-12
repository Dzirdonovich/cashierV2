import { OrderitemCategoryEnum } from '../../orderitem/enums/orderitem.category.enum';
import { CreateIngredientDto } from '../../ingredients/dto/create-ingredient.dto';
import { CreateOrderitemDto } from '../../orderitem/dto/create-orderitem.dto';

export class CreateOrderDto {
  readonly Order: {
    readonly client: string;
    readonly place: number;
    readonly payment: number;
  };
  readonly OrderItems: CreateOrderitemDto[];

  readonly workerId: number;
}
