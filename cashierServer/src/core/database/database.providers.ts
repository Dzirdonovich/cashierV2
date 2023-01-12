import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';
import { Order } from '../../modules/orders/entities/order.entity';
import { Worker } from '../../modules/workers/entities/worker.entity';
import { Orderitem } from '../../modules/orderitem/entities/orderitem.entity';
import { Ingredient } from '../../modules/ingredients/entities/ingredient.entity';
import { MenuItem } from '../../modules/menu-item/entities/menu-item.entity';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([Order, Worker, Orderitem, Ingredient, MenuItem]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
