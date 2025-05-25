import type { Charger, ChargerState } from "../../types/ChargerType";
import Tooltip from "./Tooltip";
type ButtonProps = {
  icon: string;
  id: string;
  status: ChargerState;
  onClick: (id: string, state: Charger["state"]) => void;
};
export default function Button({ id, status, icon, onClick}: ButtonProps) {
  return (
    <div className="relative group inline-block">
      <button
        data-testid={id + "_" + status}
        className="cursor-pointer"
        onClick={() => onClick(id, status)}
      >
        <img src={icon} alt="img" />
      </button>
      <Tooltip status={status} controls={true}/>
    </div>
  );
}
