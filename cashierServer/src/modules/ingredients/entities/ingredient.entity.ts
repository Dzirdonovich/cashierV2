import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { IngredientCategoryEnum } from '../enums/ingredient.category.enum';
import { IngredientValueEnum } from '../enums/ingredient.value.enum';
import { MenuItem } from '../../menu-item/entities/menu-item.entity';

@Table
export class Ingredient extends Model<Ingredient> {
  @Column({ type: DataType.STRING })
  name: string;
  @Column({ type: DataType.INTEGER })
  price: number;
  @Column({
    type: DataType.ENUM(
      IngredientCategoryEnum.vegetable,
      IngredientCategoryEnum.fruit,
      IngredientCategoryEnum.meat,
      IngredientCategoryEnum.cheese,
      IngredientCategoryEnum.coffe,
      IngredientCategoryEnum.milk,
    ),
  })
  category: IngredientCategoryEnum;
  @Column({
    type: DataType.ENUM(IngredientValueEnum.weight, IngredientValueEnum.volume),
  })
  value: IngredientValueEnum;
  @ForeignKey(() => MenuItem)
  @Column
  menuItemId: number;
  @BelongsTo(() => MenuItem)
  menuItem: MenuItem;
}
