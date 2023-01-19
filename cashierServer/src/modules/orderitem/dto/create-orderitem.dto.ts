import { OrderitemCategoryEnum } from '../enums/orderitem.category.enum';
import { CreateIngredientDto } from '../../ingredients/dto/create-ingredient.dto';

export class CreateOrderitemDto {
  readonly category: OrderitemCategoryEnum;
  readonly size: number;
  readonly name: string;
  readonly price: number;
  ingredients: CreateIngredientDto[];
  readonly orderId: number;
  readonly count: number;
}
