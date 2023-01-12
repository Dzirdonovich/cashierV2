import { CreateIngredientDto } from '../../ingredients/dto/create-ingredient.dto';
import { OrderitemCategoryEnum } from '../../orderitem/enums/orderitem.category.enum';

export class CreateMenuItemDto {
  readonly name: string;
  readonly ingredients: CreateIngredientDto[];
  readonly category: OrderitemCategoryEnum;
  readonly price: number;
}
