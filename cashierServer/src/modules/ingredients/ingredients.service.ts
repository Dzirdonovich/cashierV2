import { Injectable } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { Ingredient } from './entities/ingredient.entity';

@Injectable()
export class IngredientsService {
  async create(createIngredientDto: CreateIngredientDto) {
    return await Ingredient.create({ ...createIngredientDto });
  }

  findAll() {
    return `This action returns all ingredients`;
  }

  async findOne(id: number) {
    return await Ingredient.findOne({ where: { menuItemId: id } });
  }
  async findAllById(id: number) {
    return await Ingredient.findAll({ where: { menuItemId: id } });
  }

  update(id: number, updateIngredientDto: UpdateIngredientDto) {
    return `This action updates a #${id} ingredient`;
  }

  remove(id: number) {
    return `This action removes a #${id} ingredient`;
  }
}
