import { IngredientCategoryEnum } from '../enums/ingredient.category.enum';
import { IngredientValueEnum } from '../enums/ingredient.value.enum';

export class CreateIngredientDto {
  readonly name: string;
  readonly price: number;
  readonly category: IngredientCategoryEnum;
  readonly value: IngredientValueEnum;
}
