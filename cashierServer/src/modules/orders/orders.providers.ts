import { ORDER_REPOSITORY } from '../../core/constants';
import { Order } from './entities/order.entity';

export const OrdersProviders = [
  {
    provide: ORDER_REPOSITORY,
    useValue: Order,
  },
];
