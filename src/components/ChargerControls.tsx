import { type Charger } from "../types/ChargerType";
import start from "../assets/start.png";
import stop from "../assets/stop.png";
import startCharging from "../assets/startCharging.png";
import charged from "../assets/charged.png";
import error from "../assets/error.png";
import deleteImg from "../assets/delete.png";
import Button from "../shared/components/Button";
import {
  OFFLINE,
  ONLINE,
  FAULT,
  CHARGING,
  READY,
  DELETE,
} from "../shared/constants";

type Props = {
  charger: Charger;
  onUpdate: (id: string, state: Charger["state"]) => void;
  onRemove: (id: string) => void;
};

export default function ChargerControls({
  charger,
  onUpdate,
  onRemove,
}: Props) {
  return (
    <div className="flex flex-wrap gap-2 mt-10">
      {charger.state === OFFLINE && (
        <Button
          id={charger.id}
          status={ONLINE}
          icon={start}
          onClick={onUpdate}
        />
      )}
      {charger.state !== OFFLINE && charger.state !== FAULT && (
        <Button
          id={charger.id}
          status={OFFLINE}
          icon={stop}
          onClick={onUpdate}
        />
      )}
      {charger.state !== OFFLINE &&
        charger.state !== FAULT &&
        charger.state !== CHARGING && (
          <Button
            id={charger.id}
            status={CHARGING}
            icon={startCharging}
            onClick={onUpdate}
          />
        )}
      {charger.state === CHARGING && (
        <Button
          id={charger.id}
          status={READY}
          icon={charged}
          onClick={onUpdate}
        />
      )}
      {charger.state !== FAULT && (
        <Button
          id={charger.id}
          status={FAULT}
          icon={error}
          onClick={onUpdate}
        />
      )}
      <Button
        id={charger.id}
        status={DELETE}
        icon={deleteImg}
        onClick={onRemove}
      />
    </div>
  );
}
