import { ORDERITEM_REPOSITORY } from '../../core/constants';
import { Orderitem } from './entities/orderitem.entity';

export const OrderItemsProviders = [
  {
    provide: ORDERITEM_REPOSITORY,
    useValue: Orderitem,
  },
];
