import { useAppDispatch } from "../hooks/redux";
import { useNavigate } from "react-router-dom";
import { clearCurrentOrder } from "../store/reducers/currentOrderReducer";
import { clearSettings } from "../store/reducers/settingsReducer";
import { MouseEventHandler } from "react";

interface ICloseButtonProps {
  twClasses: string;
  onClick: MouseEventHandler;
}

const CloseButton = ({ twClasses, onClick }: ICloseButtonProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onClickCloseButton = () => {
    dispatch(clearCurrentOrder());
    dispatch(clearSettings());
    navigate("/");
  };
  return (
    <button onClick={onClick} className={twClasses}>
      x
    </button>
  );
};

export default CloseButton;
