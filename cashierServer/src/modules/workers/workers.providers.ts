import { WORKER_REPOSITORY } from '../../core/constants';
import { Worker } from './entities/worker.entity';

export const WorkersProviders = [
  {
    provide: WORKER_REPOSITORY,
    useValue: Worker,
  },
];
