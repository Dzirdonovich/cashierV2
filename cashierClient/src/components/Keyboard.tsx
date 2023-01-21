import { useAppDispatch, useAppSelector } from "../hooks/redux";
import {
  setKeyBoard,
  setNameLastPage,
} from "../store/reducers/settingsReducer";
import React from "react";

const Keyboard = () => {
  const keys = Array.from("йцукенгшщзхъфывапролджэячсмитьбю.");
  const dispatch = useAppDispatch();
  const settings = useAppSelector((state) => state.settings);
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setNameLastPage(e.target.value));
  };
  return (
    <div className="absolute top-[15%] left-[10%] right-[10%] bottom-[15%] bg-white rounded-3xl shadow-2xl px-8 py-4 z-20">
      <button
        onClick={() => dispatch(setKeyBoard())}
        className="absolute top-4 right-8  text-4xl"
      >
        x
      </button>
      <div className="w-full h-1/4 flex justify-center items-center">
        <input
          type="text"
          className="w-[90%] h-full bg-blue-100 "
          placeholder="Имя клиента"
          value={settings.lastPage.name}
          onChange={(event) => onChangeName(event)}
        />
      </div>
      <div className="h-3/4 flex flex-wrap justify-center">
        {keys.map((key) => (
          <button className="w-[10%] h-[25%] flex items-center justify-center bg-blue-200 rounded-3xl ml-1">
            {key}
          </button>
        ))}
      </div>
      <h1>Не закончено</h1>
    </div>
  );
};
export default Keyboard;
