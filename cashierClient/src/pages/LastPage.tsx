import CurrentOrder from "../components/CurrentOrder";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import WorkerButton from "../components/WorkerButton";
import { BsFillPeopleFill, BsFillTelephoneFill } from "react-icons/all";
import {
  setInputLastPage,
  setNameLastPage,
  setPriceLastPage,
  setTelephoneLastPage,
} from "../store/reducers/settingsReducer";
import React, { useEffect, useRef } from "react";
import { postOrder } from "../store/asyncThynk/HTTPOrders";
import { useNavigate } from "react-router-dom";
import { clearCurrentOrder } from "../store/reducers/currentOrderReducer";
import { floorToNumber } from "../utils/floorToNumber";

const LastPage = () => {
  const dispatch = useAppDispatch();
  const settings = useAppSelector((state) => state.settings);
  const orders = useAppSelector((state) => state.currentOrder.Orders);
  const currentOrder = useAppSelector((state) => state.currentOrder.Current);
  const workers = useAppSelector((state) => state.worker);
  let fullprice = 0;
  orders.forEach((x) => (fullprice += x.price));
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "00", "0", "<"];
  const telephoneInput = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    telephoneInput.current?.focus();
  }, []);
  const onClickTelephone = () => {
    dispatch(setInputLastPage(0));
  };
  const onClickName = () => {
    dispatch(setInputLastPage(1));
  };
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setNameLastPage(e.target.value));
  };
  const onClickPrice = () => {
    dispatch(setInputLastPage(2));
  };

  const onClickNumber = (number: string) => {
    const pastValue =
      settings.lastPage.input === 0
        ? settings.lastPage.telephone
        : settings.lastPage.input === 1
        ? settings.lastPage.name
        : settings.lastPage.money;
    const newValue =
      number === "<" ? pastValue.slice(0, -1) : pastValue + number;
    dispatch(
      settings.lastPage.input === 0
        ? setTelephoneLastPage(newValue)
        : settings.lastPage.input === 1
        ? setNameLastPage(newValue)
        : setPriceLastPage(newValue)
    );
  };

  const onClickPay = () => {
    const newOrder = {
      Order: {
        client: settings.lastPage.name,
        place: settings.placeOrder,
        payment: 0,
        telephone: settings.lastPage.telephone,
        money: Number(settings.lastPage.money),
      },
      OrderItems: [...orders],
      workerId: settings.workerId,
    };

    dispatch(postOrder(newOrder));
    setTimeout(() => {
      navigate("/");
    }, 500);
    dispatch(clearCurrentOrder());
  };

  return (
    <div className="flex justify-between h-full">
      <div className="w-[7%] bg-black"></div>
      <div className="w-[73%] bg-gray-400 px-8 font-semibold text-2xl">
        <div className="w-full flex justify-between items-center py-2  h-[18%]">
          <div className="w-1/2 font-bold text-4xl">
            К оплате: {fullprice} Р
          </div>
          <WorkerButton workers={workers} style={"w-1/4"} />
          <button className="py-2 px-4 bg-white  rounded-md w-1/4">
            Промокод
          </button>
        </div>
        <div className="h-[64%] flex justify-between">
          <div className="w-[60%] flex flex-col justify-between">
            <div className="w-full bg-white h-[20%] relative rounded-xl overflow-hidden ">
              <BsFillTelephoneFill className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
              <input
                onClick={() => onClickTelephone()}
                ref={telephoneInput}
                value={settings.lastPage.telephone}
                type="text"
                placeholder="Номер"
                className="w-full h-full absolute absolute left-12 w-[90%] outline-0"
              />
            </div>
            <div className="w-full bg-white h-[20%] relative rounded-xl overflow-hidden ">
              <BsFillPeopleFill className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
              <input
                onClick={() => onClickName()}
                onChange={(e) => onChangeName(e)}
                value={settings.lastPage.name}
                type="text"
                placeholder="Имя клиента"
                className="w-full h-full absolute absolute left-12 w-[90%] outline-0"
              />
            </div>
            <div className="w-full bg-white h-[45%] relative rounded-xl overflow-hidden ">
              <BsFillPeopleFill className="absolute left-2 top-[18%] -translate-y-[20%] z-10" />
              <input
                onClick={() => onClickPrice()}
                value={settings.lastPage.money}
                type="text"
                placeholder="Сумма у клиента"
                className="w-full h-[40%] absolute absolute left-12 w-[90%] outline-0"
              />
              <div className="absolute top-[30%] left-2">
                Сдача{" "}
                {Number(settings.lastPage.money) > fullprice
                  ? Number(settings.lastPage.money) - fullprice
                  : ""}
              </div>
              <div className="absolute bottom-2 left-2 right-2 flex justify-between h-1/2 z-10">
                <button
                  onClick={() =>
                    dispatch(
                      setPriceLastPage(floorToNumber(fullprice, 10).toString())
                    )
                  }
                  className="text-center w-[30%] bg-gray-400 rounded-xl "
                >
                  {floorToNumber(fullprice, 10)}
                </button>
                <button
                  onClick={() =>
                    dispatch(
                      setPriceLastPage(floorToNumber(fullprice, 50).toString())
                    )
                  }
                  className="text-center w-[30%] bg-gray-400 rounded-xl "
                >
                  {floorToNumber(fullprice, 50)}
                </button>
                <button
                  onClick={() => dispatch(setPriceLastPage(fullprice))}
                  className="text-center w-[30%] bg-gray-400 rounded-xl "
                >
                  Ровно
                </button>
              </div>
            </div>
          </div>
          <div className="w-[39%] flex justify-between flex-wrap rounded-xl overflow-hidden ">
            {numbers.map((number) => (
              <button
                onClick={() => onClickNumber(number)}
                className="w-1/3 h-1/4 flex justify-center items-center bg-white border"
              >
                {number}
              </button>
            ))}
          </div>
        </div>
        <div className="w=[18%]">
          <button onClick={() => onClickPay()}>Оплатить</button>
        </div>
      </div>
      <div className="w-[20%] bg-white">
        <CurrentOrder currentOrder={currentOrder} orders={orders} />
      </div>
    </div>
  );
};
export default LastPage;
