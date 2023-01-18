import { IOrderItemProps } from "../models/IOrderItemProps";

function OrderItem({
  price,
  number,
  place,
  status,
  client,
  createdAt,
  orderItem,
}: IOrderItemProps) {
  return (
    <div
      onClick={() => console.log(orderItem)}
      className="bg-white m-2 box-border p-3 flex flex-col justify-between w-[22.6%] h-[29%] rounded-xl"
    >
      <div className="flex justify-between flex-wrap box-border ">
        <div className=" box-border bg-blue-500 mr-2 rounded-md p-1 text-3xl text-white font-bold">
          {number} - {orderItem.length}
        </div>
        <div className="w-1/3 text-right">
          {createdAt.getHours()} : {createdAt.getMinutes()}
        </div>
        <div className="w-full font-bold text-xl">{client}</div>
      </div>
      <div className="flex justify-between">
        <div>
          {status === "ACCEPT_ORDER"
            ? "Принят"
            : status === "COOKED_ORDER"
            ? "Готовится"
            : status === "READY_ORDER"
            ? "Выдан"
            : ""}
        </div>
        <div>{price} Р</div>
      </div>
    </div>
  );
}
export default OrderItem;
