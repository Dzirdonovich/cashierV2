import { Module } from '@nestjs/common';
import { WorkersService } from './workers.service';
import { WorkersController } from './workers.controller';
import { WorkersProviders } from './workers.providers';
import { OrdersModule } from '../orders/orders.module';

@Module({
  controllers: [WorkersController],
  providers: [WorkersService, ...WorkersProviders],
})
export class WorkersModule {}
