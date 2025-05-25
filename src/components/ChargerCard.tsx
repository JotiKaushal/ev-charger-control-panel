import { type Charger } from "../types/ChargerType";
import ChargerControls from "./ChargerControls";
import { getShortName } from "../shared/utility";
import Tooltip from "../shared/components/Tooltip";

type Props = {
  charger: Charger;
  onRemove: (id: string) => void;
  onUpdate: (id: string, state: Charger["state"]) => void;
};

export default function ChargerCard({ charger, onRemove, onUpdate }: Props) {
  return (
    <div className="p-4 border rounded-xl shadow bg-white space-y-2">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-lg">{getShortName(charger.id)} </h2>

        <div className="relative group inline-block">
          <img src={charger.icon} alt="status" />
          <Tooltip status={charger.state} controls={false} />
        </div>
      </div>

      <ChargerControls
        charger={charger}
        onUpdate={onUpdate}
        onRemove={onRemove}
      />
    </div>
  );
}
