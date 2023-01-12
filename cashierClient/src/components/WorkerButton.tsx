import { IWorker } from "../models/IWorker";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { getWorkers } from "../store/asyncThynk/HTTPWorkers";
import { useEffect } from "react";
import { setWorkerModal } from "../store/reducers/settingsReducer";

interface IWorkersProps {
  workers: IWorker[];
  style: string;
}

const WorkerButton = ({ workers, style }: IWorkersProps) => {
  const currentIdWorker = useAppSelector((state) => state.settings.workerId);
  const currentWorker = workers.find((worker) => worker.id === currentIdWorker);
  const dispatch = useAppDispatch();
  const onClickWorkerButton = () => {
    dispatch(setWorkerModal());
  };

  return (
    <div className={style} onClick={() => onClickWorkerButton()}>
      <button className="bg-white py-2 px-4 rounded-md">
        {" "}
        Кассир: {currentWorker?.name}
      </button>
    </div>
  );
};
export default WorkerButton;
