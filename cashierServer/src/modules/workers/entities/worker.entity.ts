import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Order } from '../../orders/entities/order.entity';

@Table
export class Worker extends Model<Worker> {
  @Column({ type: DataType.STRING })
  name: string;
  @Column({ type: DataType.STRING })
  lastName: string;
  @Column({ type: DataType.INTEGER })
  position: number;
  @HasMany(() => Order)
  Orders: Order[];
}
