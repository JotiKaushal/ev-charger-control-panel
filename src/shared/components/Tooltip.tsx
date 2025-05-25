import type { ChargerState } from "../../types/ChargerType";
import { controlsTooltipText, statusToolttip } from "../constants";
type TooltipProps = {
  controls: boolean;
  status: ChargerState;
};

export default function Tooltip({ controls, status }: TooltipProps) {
  return (
    <div
      className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
              bg-gray-800 text-white text-sm rounded px-2 py-1 whitespace-nowrap z-10"
    >
      {controls && controlsTooltipText[status]}
      {!controls && statusToolttip[status]}
    </div>
  );
}
