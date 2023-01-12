import { Module } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { IngredientsController } from './ingredients.controller';
import { IngredientProviders } from './ingredients.providers';

@Module({
  controllers: [IngredientsController],
  providers: [IngredientsService, ...IngredientProviders],
  exports: [IngredientsService, ...IngredientProviders],
})
export class IngredientsModule {}
