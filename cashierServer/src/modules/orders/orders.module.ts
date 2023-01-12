import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { OrdersProviders } from './orders.providers';
import { WorkersModule } from '../workers/workers.module';
import { OrderitemModule } from '../orderitem/orderitem.module';
import { OrderitemService } from '../orderitem/orderitem.service';
import { OrderItemsProviders } from '../orderitem/orderitem.providers';
import { IngredientsModule } from '../ingredients/ingredients.module';
import { MenuItemModule } from '../menu-item/menu-item.module';

@Module({
  controllers: [OrdersController],

  providers: [OrdersService, ...OrdersProviders],
  imports: [OrderitemModule, IngredientsModule, MenuItemModule],
})
export class OrdersModule {}
