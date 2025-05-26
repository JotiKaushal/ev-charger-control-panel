import { type Charger, type ChargerState } from "../types/ChargerType";
import {startIcon, stopIcon, startChargingIcon, chargedIcon, errorIcon, deleteIcon} from '../shared/icons'
import Button from "../shared/components/Button";
import { removeCharger, updateChargerState } from "../store/ChargersSlice";
import { useDispatch } from "react-redux";
import  {OFFLINE, ONLINE, FAULT, CHARGING, READY, DELETE} from "../shared/constants";
import { mockApi } from "../apis/mockapis";
import { useError } from "../context/ErrorContext";
type Props = {
  charger: Charger;
};

export default function ChargerControls({ charger }: Props) {
  const dispatch = useDispatch();
   const {setError } = useError();
  function deleteCharger(id: string) {
    try {
      mockApi.deleteCharger(id);
      dispatch(removeCharger(id));
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError('Unknown error occurred while deleting charger.');
    }
  }

  function updateCharger(id: string, state: ChargerState) {
    
    try {
      mockApi.saveChargers(id, state);
      dispatch(updateChargerState({ id, state }));
    } catch (err) {
 if (err instanceof Error) setError(err.message);
      else setError('Unknown error occurred while updating charger.');
    }
  }

  return (
    <div className="flex flex-wrap gap-2 mt-10">
      {charger.state === OFFLINE && (
        <Button
          id={charger.id}
          status={ONLINE}
          icon={startIcon}
          onClick={() => {
            updateCharger(charger.id, ONLINE);
          }}
        />
      )}
      {charger.state !== OFFLINE && charger.state !== FAULT && (
        <Button
          id={charger.id}
          status={OFFLINE}
          icon={stopIcon}
          onClick={() => updateCharger(charger.id, OFFLINE)}
        />
      )}
      {charger.state !== OFFLINE &&
        charger.state !== FAULT &&
        charger.state !== CHARGING && (
          <Button
            id={charger.id}
            status={CHARGING}
            icon={startChargingIcon}
            onClick={() => updateCharger(charger.id, CHARGING)}
          />
        )}
      {charger.state === CHARGING && (
        <Button
          id={charger.id}
          status={READY}
          icon={chargedIcon}
          onClick={() => updateCharger(charger.id, READY)}
        />
      )}
      {charger.state !== FAULT && (
        <Button
          id={charger.id}
          status={FAULT}
          icon={errorIcon}
          onClick={() => updateCharger(charger.id, FAULT)}
        />
      )}
      <Button
        id={charger.id}
        status={DELETE}
        icon={deleteIcon}
        onClick={() => {
          deleteCharger(charger.id);
        }}
      />
    </div>
  );
}

