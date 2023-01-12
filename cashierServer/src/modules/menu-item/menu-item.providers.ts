import { MENUITEM_REPOSITORY } from '../../core/constants';
import { MenuItem } from './entities/menu-item.entity';

export const MenuItemProviders = [
  {
    provide: MENUITEM_REPOSITORY,
    useValue: MenuItem,
  },
];
