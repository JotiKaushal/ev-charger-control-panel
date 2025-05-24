import {type Charger } from '../types/ChargerType';
import ChargerControls from './ChargerControls';

type Props = {
  charger: Charger;
  onRemove: (id: string) => void;
  onUpdate: (id: string, state: Charger['state']) => void;
};

export default function ChargerCard({ charger, onRemove, onUpdate }: Props) {
  return (
    <div className="p-4 border rounded-xl shadow bg-white space-y-2">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-lg">Charger ID: {charger.id}</h2>
        <button
          className="text-red-500 font-semibold"
          onClick={() => onRemove(charger.id)}
        >
          Remove
        </button>
      </div>
      <p className="text-sm">Status: <strong>{charger.state}</strong></p>
      <ChargerControls charger={charger} onUpdate={onUpdate} />
    </div>
  );
}
