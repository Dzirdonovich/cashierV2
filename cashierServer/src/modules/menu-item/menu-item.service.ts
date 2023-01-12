import { Inject, Injectable } from '@nestjs/common';
import { CreateMenuItemDto } from './dto/create-menu-item.dto';
import { UpdateMenuItemDto } from './dto/update-menu-item.dto';
import { MenuItem } from './entities/menu-item.entity';
import { IngredientsService } from '../ingredients/ingredients.service';
import {
  INGREDIENT_REPOSITORY,
  MENUITEM_REPOSITORY,
} from '../../core/constants';
import { Ingredient } from '../ingredients/entities/ingredient.entity';

@Injectable()
export class MenuItemService {
  constructor(
    private readonly ingredientService: IngredientsService,
    @Inject(MENUITEM_REPOSITORY)
    private readonly menuItemRepository: typeof MenuItem,
    @Inject(INGREDIENT_REPOSITORY)
    private readonly ingredientRepository: typeof Ingredient,
  ) {}
  async create(createMenuItemDto: CreateMenuItemDto) {
    return await this.menuItemRepository
      .create(createMenuItemDto.name)
      .then((createdMenuItem) => {
        createdMenuItem.update({
          name: createMenuItemDto.name,
          category: createMenuItemDto.category,
          price: createMenuItemDto.price,
        });
        createMenuItemDto.ingredients.forEach((ingredient) =>
          this.ingredientRepository
            .create(ingredient)
            .then((createdIngredient) =>
              createdIngredient.update({ menuItemId: createdMenuItem.id }),
            ),
        );
        createdMenuItem.update({ ingredients: createMenuItemDto.ingredients });

        return createdMenuItem;
      });
  }

  findAll() {
    return this.menuItemRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} menuItem`;
  }

  update(id: number, updateMenuItemDto: UpdateMenuItemDto) {
    return `This action updates a #${id} menuItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} menuItem`;
  }
}
