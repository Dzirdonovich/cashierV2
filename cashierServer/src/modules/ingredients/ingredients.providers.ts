import { INGREDIENT_REPOSITORY } from '../../core/constants';
import { Ingredient } from './entities/ingredient.entity';

export const IngredientProviders = [
  {
    provide: INGREDIENT_REPOSITORY,
    useValue: Ingredient,
  },
];
