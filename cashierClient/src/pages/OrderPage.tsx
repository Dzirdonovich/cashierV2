import { PageEnum } from "../enums";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { setCurrentPage } from "../store/reducers/settingsReducer";
import { log } from "util";
import { getMenu } from "../store/asyncThynk/HTTPMenu";
import { useEffect, useState } from "react";
import MenuItem from "../components/MenuItem";
import CurrentOrder from "../components/CurrentOrder";
import { useNavigate } from "react-router-dom";
import { AiFillFire } from "react-icons/ai/index";
import { FaPizzaSlice } from "react-icons/fa/index";
import { GiCakeSlice } from "react-icons/gi/index";
import { BsFillCupFill } from "react-icons/bs/index";
import { ACTION_PAGE, COFFEE_PAGE, DESSERT_PAGE, PIZZA_PAGE } from "../consts";

interface IOrderPageProps {
  page: string;
}
function OrderPage({ page }: IOrderPageProps) {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);
  const menu = useAppSelector((state) => state.menu);
  const currentOrder = useAppSelector((state) => state.currentOrder);
  useEffect(() => {
    dispatch(getMenu());
    console.log(state.worker);
  }, []);
  const pages = [ACTION_PAGE, PIZZA_PAGE, COFFEE_PAGE, DESSERT_PAGE];

  const icons = [
    <AiFillFire className="w-1/2 h-1/2 " />,
    <FaPizzaSlice className="w-1/2 h-1/2" />,
    <BsFillCupFill className="w-1/2 h-1/2" />,
    <GiCakeSlice className="w-1/2 h-1/2" />,
  ];
  const [nav, setNav] = useState(0);
  const onClickNav = (page: string, index: number) => {
    dispatch(setCurrentPage(page));
    setNav(index);
  };

  return (
    <div className="flex justify-between w-screen h-screen">
      <div className="w-[7%] bg-black flex flex-col">
        {pages.map((page, index, array) => (
          <div
            key={page + index}
            onClick={() => onClickNav(page, index)}
            className={
              nav === index
                ? "w-full h-20 mt-4 bg-white flex justify-center items-center"
                : "w-full h-20 mt-4 bg-blue-500 cursor-pointer flex justify-center items-center"
            }
          >
            {icons[index]}
          </div>
        ))}
      </div>

      <div className="w-[73%] bg-gray-400 flex flex-col justify-between p-4">
        <div className="h-full px-2   ">
          <div>
            {page === PIZZA_PAGE
              ? "Пицца"
              : page === ACTION_PAGE
              ? "Акции"
              : page === COFFEE_PAGE
              ? "Коффе"
              : page === DESSERT_PAGE
              ? "Десстерт"
              : ""}
          </div>
          <div className="h-[90%]  mt-2 flex flex-wrap">
            {menu.map((item) =>
              item.category === page.toString() ? <MenuItem item={item} /> : ""
            )}
          </div>
        </div>
      </div>
      <div className="w-[20%] bg-white">
        {
          <CurrentOrder
            currentOrder={currentOrder.Current}
            orders={currentOrder.Orders}
          />
        }
      </div>
    </div>
  );
}
export default OrderPage;
