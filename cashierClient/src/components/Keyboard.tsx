import { useAppDispatch, useAppSelector } from "../hooks/redux";
import {
  setKeyBoard,
  setNameLastPage,
  setUpperCase,
} from "../store/reducers/settingsReducer";
import React from "react";

const Keyboard = () => {
  const keys = Array.from("ёйцукенгшщзхъ<фывапролджэячсмитьбюs .-");
  const dispatch = useAppDispatch();
  const settings = useAppSelector((state) => state.settings);
  const upperCase = settings.keyBoard.upperCase;
  const onClickKey = (key: string) => {
    let newKey = upperCase ? key.toUpperCase() : key;

    switch (key) {
      default:
        let lastValue = settings.lastPage.name;
        dispatch(setUpperCase(false));
        const newValue =
          key === "<"
            ? lastValue.slice(0, -1)
            : key === "s"
            ? lastValue
            : (lastValue += newKey);
        dispatch(setNameLastPage(newValue));
        break;
      case "s":
        dispatch(setUpperCase(!upperCase));
    }
  };

  return (
    <div className="absolute top-0 left-[10%] right-[10%] bottom-0 bg-white rounded-3xl shadow-2xl px-8 py-4 z-20 flex flex-col justify-between ">
      <button
        onClick={() => dispatch(setKeyBoard())}
        className="absolute top-4 right-8  text-4xl"
      >
        x
      </button>
      <div className="w-full h-[10%] flex justify-center items-center overflow-hidden ">
        <input
          type="text"
          className="w-[90%] h-full bg-blue-100 text-black rounded-xl px-2 placeholder:text-black"
          placeholder="Имя клиента"
          value={settings.lastPage.name}
        />
      </div>
      <div className="h-1/2 relative">
        <div className="h-[75%] flex flex-wrap justify-center">
          {keys.map((key, index) => {
            let classes = "";
            let p = 15;

            switch (key) {
              default:
                index >= 14 && index <= 23
                  ? (classes += "w-[8.2%]")
                  : index >= 24 && index <= 33
                  ? (classes += "w-[10.5%]")
                  : (classes += "w-[6.5%]");
                classes +=
                  " h-[24%] flex items-center justify-center bg-blue-200 rounded-3xl ml-1 ";
                break;
              case " ":
                classes +=
                  " w-[50%] h-[24%] flex items-center justify-center bg-blue-200 rounded-3xl ml-1 ";
                break;
              case "s":
                classes +=
                  " w-[27%] h-[24%] flex items-center justify-center bg-blue-200 rounded-3xl ml-1 ";
                break;
              case ".":
                classes +=
                  " w-[10%] h-[24%] flex items-center justify-center bg-blue-200 rounded-3xl ml-1 ";
                break;
              case "-":
                classes +=
                  " w-[10%] h-[24%] flex items-center justify-center bg-blue-200 rounded-3xl ml-1 ";
                break;
            }

            return (
              <button
                onClick={() => onClickKey(key)}
                className={upperCase ? (classes += " uppercase ") : classes}
              >
                {key === "s" ? "shift" : key === " " ? "space" : key}
              </button>
            );
          })}
        </div>
        <button
          onClick={() => dispatch(setKeyBoard())}
          className="absolute right-2 text-white bg-blue-500 px-32 py-4 rounded-2xl"
        >
          Готово
        </button>
      </div>
    </div>
  );
};
export default Keyboard;
