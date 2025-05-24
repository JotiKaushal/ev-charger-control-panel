import { type Charger } from '../types/ChargerType';

type Props = {
  charger: Charger;
  onUpdate: (id: string, state: Charger["state"]) => void;
};

export default function ChargerControls({ charger, onUpdate }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      <button onClick={() => onUpdate(charger.id, 'online')}>Turn On</button>
      <button onClick={() => onUpdate(charger.id, 'charging')}>Start Charging</button>
      <button onClick={() => onUpdate(charger.id, 'ready')}>Stop Charging</button>
      <button onClick={() => onUpdate(charger.id, 'fault')}>Simulate Fault</button>
    </div>
  );
}
