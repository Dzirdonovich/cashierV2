import {
  Column,
  DataType,
  Table,
  Model,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import {
  ACCEPT_ORDER,
  COOKED_ORDER,
  READY_ORDER,
} from '../../../core/constants';
import { Worker } from '../../workers/entities/worker.entity';
import { Orderitem } from '../../orderitem/entities/orderitem.entity';

@Table
export class Order extends Model<Order> {
  @Column({ type: DataType.STRING, allowNull: false, defaultValue: 'Рустам' })
  client: string;
  @Column({ type: DataType.INTEGER })
  place: number;
  @Column({ type: DataType.INTEGER })
  price: number;
  @Column({
    type: DataType.ENUM(ACCEPT_ORDER, COOKED_ORDER, READY_ORDER),
    defaultValue: ACCEPT_ORDER,
  })
  status: number;
  @HasMany(() => Orderitem)
  OrderItemRel: Orderitem[];

  @Column({ type: DataType.INTEGER })
  payment: number;
  @Column({ type: DataType.STRING })
  telephone: string;
  @Column({ type: DataType.INTEGER })
  money: number;

  @Column({ type: DataType.INTEGER })
  number: number;

  @ForeignKey(() => Worker)
  @Column
  workerId: number;
  @BelongsTo(() => Worker)
  worker: Worker;
}
