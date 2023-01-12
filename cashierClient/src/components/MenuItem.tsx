import { IMenu } from "../models/IMenu";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { addItemToCurrent } from "../store/reducers/currentOrderReducer";
import { setStateOrder } from "../store/reducers/settingsReducer";
import { INCREMENT } from "../consts";

interface MenuItemProps {
  item: IMenu;
}

function MenuItem({ item }: MenuItemProps) {
  const dispatch = useAppDispatch();
  const addItemToOrder = (item: IMenu) => {
    dispatch(addItemToCurrent(item));
    dispatch(setStateOrder(1));
  };

  return (
    <button
      onClick={() => addItemToOrder(item)}
      className="flex flex-col justify-between ml-2 mb-2 box-border text-sm bg-white w-[18%] h-[15%] rounded-md p-4"
    >
      <div>{item.name}</div>
      <div>{Math.floor(item.price)} Р</div>
    </button>
  );
}
export default MenuItem;
