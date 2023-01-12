import { Module } from '@nestjs/common';
import { OrderitemService } from './orderitem.service';
import { OrderitemController } from './orderitem.controller';
import { OrdersModule } from '../orders/orders.module';
import { OrderItemsProviders } from './orderitem.providers';

@Module({
  controllers: [OrderitemController],
  providers: [OrderitemService, ...OrderItemsProviders],
  exports: [OrderitemService],
})
export class OrderitemModule {}
