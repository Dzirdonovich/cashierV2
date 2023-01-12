import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { json } from 'sequelize';
import { Ingredient } from '../../ingredients/entities/ingredient.entity';
import { CreateIngredientDto } from '../../ingredients/dto/create-ingredient.dto';
import { OrderitemCategoryEnum } from '../../orderitem/enums/orderitem.category.enum';
@Table
export class MenuItem extends Model<MenuItem> {
  @Column({ type: DataType.STRING })
  name: string;
  @HasMany(() => Ingredient)
  ingredient: Ingredient[];
  @Column({ type: DataType.ARRAY(DataType.JSON) })
  ingredients: CreateIngredientDto[];
  @Column({
    type: DataType.ENUM(
      OrderitemCategoryEnum.snack,
      OrderitemCategoryEnum.pizza,
      OrderitemCategoryEnum.dessert,
      OrderitemCategoryEnum.coffe,
    ),
  })
  category: OrderitemCategoryEnum;
  @Column({ type: DataType.INTEGER })
  price: number;
}
