import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import {
  INGREDIENT_REPOSITORY,
  MENUITEM_REPOSITORY,
  ORDER_REPOSITORY,
} from '../../core/constants';
import { Order } from './entities/order.entity';
import { Worker } from '../workers/entities/worker.entity';
import { OrderitemService } from '../orderitem/orderitem.service';
import { Orderitem } from '../orderitem/entities/orderitem.entity';
import { Ingredient } from '../ingredients/entities/ingredient.entity';
import { MenuItem } from '../menu-item/entities/menu-item.entity';

@Injectable()
export class OrdersService {
  constructor(
    @Inject(ORDER_REPOSITORY) private readonly orderRepository: typeof Order,
    @Inject(INGREDIENT_REPOSITORY)
    private readonly IngredientRepository: typeof Ingredient,
    @Inject(MENUITEM_REPOSITORY)
    private readonly MenuItemRepository: typeof MenuItem,
    private readonly orderitemService: OrderitemService,
  ) {}
  async create(createOrderDto: CreateOrderDto) {
    let orderNumber = 0;
    let orders = await Order.findAll();

    if (orders.length !== 0) {
      await Order.findAll({ limit: 1, order: [['createdAt', 'DESC']] }).then(
        (x) => {
          orderNumber = x[0].number;
          console.log(x[0].number);
        },
      );
    }

    const order = await Order.create(createOrderDto.Order).then((order) => {
      orderNumber++;
      order.update({ number: orderNumber });
      return order;
    });
    const worker = await Worker.findOne({
      where: {
        id: createOrderDto.workerId,
      },
    });
    const item = [];

    createOrderDto.OrderItems.forEach((orderItem) => {
      this.orderitemService
        .create({
          ...orderItem,
          orderId: order.id,
          price: orderItem.price,
          size: orderItem.size,
          ingredients: orderItem.ingredients,
          name: orderItem.name,
          category: orderItem.category,
        })
        .then((createdOrderItem) => {
          order.update({ price: order.price + createdOrderItem.price });
          this.MenuItemRepository.findAll().then((foundMenuItem) =>
            foundMenuItem.forEach((x) =>
              x.name == orderItem.name
                ? createdOrderItem.update({ ingredients: x.ingredients })
                : '',
            ),
          );
          item.push(createdOrderItem);
        });
      return { item, order };
    });

    await order.update({
      workerId: worker.id,
    });

    return order;
  }

  async findAllWithPage(page: number) {
    return await Order.findAll({
      order: [['createdAt', 'DESC']],
      limit: 12,
      offset: 12 * page - 12,
      include: [Orderitem, Worker],
    });
  }
  async findAll() {
    return await Order.findAll({
      order: [['createdAt', 'ASC']],
      include: [Orderitem, Worker],
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
