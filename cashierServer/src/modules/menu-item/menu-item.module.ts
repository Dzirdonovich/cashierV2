import { Module } from '@nestjs/common';
import { MenuItemService } from './menu-item.service';
import { MenuItemController } from './menu-item.controller';
import { IngredientsModule } from '../ingredients/ingredients.module';
import { MenuItemProviders } from './menu-item.providers';

@Module({
  controllers: [MenuItemController],
  providers: [MenuItemService, ...MenuItemProviders],
  imports: [IngredientsModule],
  exports: [...MenuItemProviders],
})
export class MenuItemModule {}
