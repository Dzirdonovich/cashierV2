import { Injectable } from '@nestjs/common';
import { CreateOrderitemDto } from './dto/create-orderitem.dto';
import { UpdateOrderitemDto } from './dto/update-orderitem.dto';
import { Orderitem } from './entities/orderitem.entity';

@Injectable()
export class OrderitemService {
  async create(createOrderitemDto: CreateOrderitemDto) {
    return await Orderitem.create(createOrderitemDto);
  }

  async findAll() {
    return await Orderitem.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} orderitem`;
  }

  update(id: number, updateOrderitemDto: UpdateOrderitemDto) {
    return `This action updates a #${id} orderitem`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderitem`;
  }
}
