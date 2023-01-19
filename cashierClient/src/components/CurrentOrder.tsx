import { IMenu } from "../models/IMenu";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import {
  setPlaceOrder,
  setSizeOrder,
  setStateOrder,
} from "../store/reducers/settingsReducer";
import { DECREMENT, INCREMENT } from "../consts";
import {
  addItemToOrder,
  changeCountOrder,
} from "../store/reducers/currentOrderReducer";
import { useNavigate } from "react-router-dom";

interface ICurrentOrderProps {
  currentOrder: IMenu;
  orders: IMenu[];
}

const CurrentOrder = ({ currentOrder, orders }: ICurrentOrderProps) => {
  const navigate = useNavigate();
  const settings = useAppSelector((state) => state.settings);
  const currentOrders = useAppSelector((state) => state.currentOrder.Orders);
  const menu = useAppSelector((state) => state.menu);

  const dispatch = useAppDispatch();
  const sizes = [25, 30, 35];
  let fullprice = 0;
  orders.forEach((x) => (fullprice += x.price));

  const setCurrentOrder = () => {
    const currentOrderPrice = currentOrder.price;
    const size =
      settings.sizeOrder === 0
        ? 25
        : settings.sizeOrder === 1
        ? 30
        : settings.sizeOrder === 2
        ? 35
        : 25;
    const price =
      settings.sizeOrder === 0
        ? Math.floor(currentOrderPrice)
        : settings.sizeOrder === 1
        ? Math.floor(currentOrderPrice * 1.5)
        : settings.sizeOrder === 2
        ? Math.floor(currentOrderPrice * 2)
        : currentOrder.price;
    const newOrder = { ...currentOrder, size, price };
    dispatch(addItemToOrder(newOrder));
    dispatch(setStateOrder(0));
  };

  const clickLastState = () => {
    console.log(currentOrders);
    navigate("/last");
    dispatch(setStateOrder(2));
  };

  const backToChoice = () => {
    console.log(currentOrder);
    dispatch(setStateOrder(1));
    navigate("/order");
  };

  const onClickCount = (index: number, action: string, menu: IMenu[]) => {
    dispatch(changeCountOrder({ index, action, menu }));
  };

  return (
    <div className="p-4 h-full">
      {" "}
      {settings.stateOrder === 0 ? (
        <div className="flex flex-col justify-between h-full">
          <div className="h-1/5">
            <div className="text-4xl font-bold">{fullprice} Р</div>
            <div className="flex w-full justify-between mt-2 rounded-md overflow-hidden ">
              {settings.placeOrder === 0 ? (
                <div
                  onClick={() => dispatch(setPlaceOrder(INCREMENT))}
                  className="bg-blue-500 px-4 py-2 text-center w-1/2"
                >
                  В зале
                </div>
              ) : (
                <div
                  onClick={() => dispatch(setPlaceOrder(INCREMENT))}
                  className="bg-gray-500 px-4 py-2 text-center w-1/2 cursor-pointer"
                >
                  В зале
                </div>
              )}
              {settings.placeOrder === 1 ? (
                <div
                  onClick={() => dispatch(setPlaceOrder(DECREMENT))}
                  className="bg-blue-500 px-4 py-2 text-center w-1/2 cursor-pointer"
                >
                  С собой
                </div>
              ) : (
                <div
                  onClick={() => dispatch(setPlaceOrder(DECREMENT))}
                  className="bg-gray-500 px-4 py-2 text-center w-1/2 "
                >
                  С собой
                </div>
              )}
            </div>
          </div>
          <div className="h-3/5">
            {currentOrders.map((order, index) => (
              <div className="mx-4 flex justify-between mt-4">
                <div className="">
                  <div>{order.name}</div>
                  <div>{order.price} Р</div>
                  <div>{order.size} </div>
                </div>
                <div className="flex justify-between items-center w-1/3 ml-4 bg-gray-400 px-4 rounded-xl text-xl">
                  {order.count === 0 ? (
                    <button
                      disabled={true}
                      onClick={() => onClickCount(index, DECREMENT, menu)}
                    >
                      -
                    </button>
                  ) : (
                    <button
                      onClick={() => onClickCount(index, DECREMENT, menu)}
                    >
                      -
                    </button>
                  )}
                  <div>{order.count}</div>
                  <button onClick={() => onClickCount(index, INCREMENT, menu)}>
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
          {orders.length != 0 ? (
            <div
              onClick={() => clickLastState()}
              className="h-[5%] text-center w-full px-4 py-2 bg-blue-500 rounded-md text-white cursor-pointer "
            >
              <button>К оплате</button>
            </div>
          ) : (
            <div
              onClick={() => clickLastState()}
              className="h-[5%] text-center w-full px-4 py-2 bg-gray-500 rounded-md text-white "
            >
              <button>К оплате</button>
            </div>
          )}
        </div>
      ) : settings.stateOrder === 1 ? (
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="text-2xl font-bold">{currentOrder.name}</div>
            <div className="text-sm text-gray-400">
              {currentOrder.ingredients.map((x) => x.name + ", ")}
            </div>
          </div>
          <div>
            <div className="w-full flex justify-between rounded-md overflow-hidden text-white">
              {sizes.map((size, index) =>
                settings.sizeOrder === index ? (
                  <div className="w-1/3 px-4 py-2 bg-blue-500 text-center">
                    {" "}
                    <div
                      className="text-2xl text-black font-bold"
                      key={size + index}
                    >
                      {currentOrder.category === "pizza"
                        ? size
                        : currentOrder.category === "coffe" && index === 0
                        ? "Мал."
                        : currentOrder.category === "coffe" && index === 1
                        ? "Ср."
                        : currentOrder.category === "coffe" && index === 2
                        ? "Бол."
                        : ""}
                    </div>
                    <div className="text-gray-400 font-medium">
                      {size === 25
                        ? currentOrder.price + " Р"
                        : size === 30
                        ? Math.floor(currentOrder.price * 1.5) + " Р"
                        : size === 35
                        ? Math.floor(currentOrder.price * 2) + " Р"
                        : ""}
                    </div>
                  </div>
                ) : (
                  <div
                    className="w-1/3 px-4 py-2 bg-gray-400 text-center cursor-pointer"
                    onClick={() => dispatch(setSizeOrder(index))}
                  >
                    <div
                      key={size + index}
                      className=" text-center cursor-pointer text-2xl text-black font-bold"
                    >
                      {currentOrder.category === "pizza"
                        ? size
                        : currentOrder.category === "coffe" && index === 0
                        ? "Мал."
                        : currentOrder.category === "coffe" && index === 1
                        ? "Ср."
                        : currentOrder.category === "coffe" && index === 2
                        ? "Бол."
                        : ""}
                    </div>
                    <div className="text-black font-medium">
                      {size === 25
                        ? currentOrder.price + " Р"
                        : size === 30
                        ? Math.floor(currentOrder.price * 1.5) + " Р"
                        : size === 35
                        ? Math.floor(currentOrder.price * 2) + " Р"
                        : ""}
                    </div>
                  </div>
                )
              )}
            </div>
            <div className="mt-2">
              <button
                onClick={() => setCurrentOrder()}
                className="px-4 py-2 w-full text-center bg-blue-500 rounded-md"
              >
                Добавить
              </button>
            </div>
          </div>
        </div>
      ) : settings.stateOrder === 2 ? (
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="h-1/5">
              <div className="text-4xl font-bold">{fullprice} Р</div>
              <div className="flex w-full justify-between mt-2 rounded-md overflow-hidden ">
                {settings.placeOrder ? (
                  <div
                    onClick={() => dispatch(setPlaceOrder(INCREMENT))}
                    className="bg-blue-500 px-4 py-2 text-center w-1/2"
                  >
                    В зале
                  </div>
                ) : (
                  <div
                    onClick={() => dispatch(setPlaceOrder(INCREMENT))}
                    className="bg-gray-500 px-4 py-2 text-center w-1/2 cursor-pointer"
                  >
                    В зале
                  </div>
                )}
                {!settings.placeOrder ? (
                  <div
                    onClick={() => dispatch(setPlaceOrder(DECREMENT))}
                    className="bg-blue-500 px-4 py-2 text-center w-1/2 cursor-pointer"
                  >
                    С собой
                  </div>
                ) : (
                  <div
                    onClick={() => dispatch(setPlaceOrder(DECREMENT))}
                    className="bg-gray-500 px-4 py-2 text-center w-1/2 "
                  >
                    С собой
                  </div>
                )}
              </div>
            </div>
          </div>
          <div>
            <div className="w-full flex justify-between rounded-md overflow-hidden text-white"></div>
            <div className="mt-2">
              <button
                onClick={() => backToChoice()}
                className="px-4 py-2 w-full text-center bg-blue-500 rounded-md"
              >
                Вернуться к выбору
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default CurrentOrder;
