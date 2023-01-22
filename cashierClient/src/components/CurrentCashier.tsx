import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { useEffect } from "react";
import { getWorkers } from "../store/asyncThynk/HTTPWorkers";
import { IWorker } from "../models/IWorker";
import { setWorkerId, setWorkerModal } from "../store/reducers/settingsReducer";

const CurrentCashier = () => {
  const workers = useAppSelector((state) => state.worker);
  const settings = useAppSelector((state) => state.settings);
  const dispatch = useAppDispatch();

  const onClickWorker = (worker: IWorker) => {
    dispatch(setWorkerId(worker));
    dispatch(setWorkerModal());
  };

  const onclickCancel = () => {
    dispatch(setWorkerModal());
  };
  let showComponent = settings.workerModal
    ? "opacity-80 absolute top-20 left-40 right-40 bottom-10 bg-black px-8 pb-4 pt-20 rounded-3xl shadow-2xl z-10"
    : "hidden absolute top-20 left-40 right-40 bottom-10 bg-black px-8 pb-4 pt-20 rounded-3xl shadow-2xl z-10";

  return (
    <div className={showComponent}>
      <button
        onClick={() => onclickCancel()}
        className=" rounded-3xl bg-red-500 py-2 px-4 w-[5%] absolute top-4 right-4 text-center text-white"
      >
        x
      </button>
      <div className="flex justify-between flex-wrap ">
        {workers.map((worker) => (
          <button
            onClick={() => onClickWorker(worker)}
            className="w-[49%] mt-4 bg-gray-400 py-2 px-4 rounded-md opacity-100 h-[5%] text-white"
          >
            {worker.name + " " + worker.lastName}
          </button>
        ))}
      </div>
    </div>
  );
};
export default CurrentCashier;
