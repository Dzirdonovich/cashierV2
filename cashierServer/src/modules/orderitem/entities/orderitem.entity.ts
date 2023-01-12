import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { COFFE, DESSERT, PIZZA, SNACK } from '../../../core/constants';
import { Order } from '../../orders/entities/order.entity';
import { OrderitemCategoryEnum } from '../enums/orderitem.category.enum';
import { CreateMenuItemDto } from '../../menu-item/dto/create-menu-item.dto';
import { CreateIngredientDto } from '../../ingredients/dto/create-ingredient.dto';

@Table
export class Orderitem extends Model<Orderitem> {
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
  size: number;
  @Column({ type: DataType.STRING })
  name: string;
  @Column({ type: DataType.INTEGER })
  price: number;
  @Column({ type: DataType.ARRAY(DataType.JSON) })
  ingredients: CreateIngredientDto[];
  @ForeignKey(() => Order)
  @Column({ type: DataType.INTEGER })
  orderId: number;
  @BelongsTo(() => Order)
  order: Order;
}
