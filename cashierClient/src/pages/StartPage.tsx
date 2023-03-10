import OrderItem from "../components/OrderItem";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { useEffect } from "react";
import { getOrders, getOrdersWithPage } from "../store/asyncThynk/HTTPOrders";
import { DECREMENT, INCREMENT } from "../consts";
import { setPage } from "../store/reducers/settingsReducer";
import { IOrder } from "../models/IOrder";
import { Link } from "react-router-dom";
import { getWorkers } from "../store/asyncThynk/HTTPWorkers";
import WorkerButton from "../components/WorkerButton";
import { getMenu } from "../store/asyncThynk/HTTPMenu";

function StartPage() {
  const dispatch = useAppDispatch();

  let state = useAppSelector((state) => state);
  let page = useAppSelector((state) => state.settings.page);
  const workers = useAppSelector((state) => state.worker);
  const setPageOrders = (action: string) => {
    let page = state.settings.page;
    console.log(page);

    action === INCREMENT
      ? dispatch(setPage(page + 1))
      : dispatch(setPage(page - 1));
  };

  useEffect(() => {
    dispatch(getOrdersWithPage(state.settings.page));

    dispatch(getOrders());
    dispatch(getWorkers());
    dispatch(getMenu());
  }, [state.settings.page]);

  const calculateMediumPrice = (orders: IOrder[]) => {
    let price = 0;
    orders.forEach((item) => (price += item.price));
    return price / orders.length;
  };

  calculateMediumPrice(state.order.orders);

  return (
    <div className="flex w-full h-full bg-gray-400">
      <div className="w-3/4 flex flex-col px-4">
        <div className="h-[10%] flex justify-between items-center">
          <div className="font-bold text-4xl">Последние</div>
          <div className="flex w-1/4 justify-between ">
            <div>
              <span className="uppercase text-xs">Заказов</span>
              <div className="text-right">{state.order.orders.length}</div>
            </div>
            <div>
              <span className="uppercase text-xs">Средний чек</span>
              <div className="text-right">
                {Math.floor(calculateMediumPrice(state.order.orders))} Р
              </div>
            </div>
            <div>
              <span className="uppercase text-xs">ср.время ожидания</span>
              <div className="text-right">00:30</div>
            </div>
          </div>
        </div>
        <div className="h-[80%] flex justify-between flex-wrap box-border">
          {state.order.ordersWithPage.map((orderItem) => (
            <OrderItem
              key={orderItem.id + orderItem.number}
              client={orderItem.client}
              number={orderItem.number}
              place={orderItem.place}
              createdAt={new Date(orderItem.createdAt)}
              status={orderItem.status}
              price={orderItem.price}
              OrderItemRel={orderItem.OrderItemRel}
              worker={orderItem.worker}
              telephone={orderItem.telephone}
              money={orderItem.money}
            />
          ))}
        </div>
        <div className="h-[10%] flex justify-between items-center">
          <div>
            <WorkerButton style={""} workers={workers} />
          </div>
          <div className="w-[10%] flex justify-between">
            {page === 1 ? (
              <div className="px-4 py-2 bg-white opacity-70 rounded-2xl">
                {"<"}
              </div>
            ) : (
              <button
                className="px-4 py-2 bg-white  rounded-2xl"
                onClick={() => setPageOrders(DECREMENT)}
              >
                {"<"}
              </button>
            )}

            {state.order.ordersWithPage.length < page * 12 ? (
              <div className="px-4 py-2 bg-white opacity-70 rounded-2xl">
                {">"}
              </div>
            ) : (
              <button
                className="px-4 py-2 bg-white rounded-2xl"
                onClick={() => setPageOrders(INCREMENT)}
              >
                {">"}
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="w-1/4 box-border m-3">
        <Link
          to={"order"}
          className="flex justify-center items-center rounded-xl  w-full h-full bg-blue-500 text-9xl text-white text-center  "
        >
          <button className="">+</button>
        </Link>
      </div>
    </div>
  );
}

export default StartPage;
