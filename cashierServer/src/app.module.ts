import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { OrdersModule } from './modules/orders/orders.module';
import { WorkersModule } from './modules/workers/workers.module';
import { OrderitemModule } from './modules/orderitem/orderitem.module';
import { IngredientsModule } from './modules/ingredients/ingredients.module';
import { MenuItemModule } from './modules/menu-item/menu-item.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
    OrdersModule,
    WorkersModule,
    OrderitemModule,
    IngredientsModule,
    MenuItemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
