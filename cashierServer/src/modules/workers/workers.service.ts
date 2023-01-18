import { Inject, Injectable } from '@nestjs/common';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { WORKER_REPOSITORY } from '../../core/constants';
import { Order } from '../orders/entities/order.entity';
import { Worker } from './entities/worker.entity';
import { where } from 'sequelize';

@Injectable()
export class WorkersService {
  constructor(
    @Inject(WORKER_REPOSITORY) private readonly workerRepository: typeof Worker,
  ) {}
  async create(createWorkerDto: CreateWorkerDto) {
    return await Worker.create({ ...createWorkerDto, position: 0 });
  }

  async findAll() {
    return await Worker.findAll();
  }

  async findOne(id: number) {
    return Worker.findOne({
      where: {
        id: id,
      },
    });
  }

  async updatePosition(id: number, updateWorkerDto: UpdateWorkerDto) {
    return await Worker.update(
      {
        position: updateWorkerDto.position,
      },
      { where: { id: id } },
    );
  }

  async remove(id: number) {
    return await Worker.findOne({where: {id: id}})
  }
}
