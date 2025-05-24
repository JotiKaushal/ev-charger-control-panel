import { useChargerStore } from './store/chargerStore';
import ChargerCard from './components/ChargerCard';
import './App.css';
export default function App() {
  const { chargers, addCharger, removeCharger, updateState } = useChargerStore();

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      <h1 className="text-3xl font-bold">EV Charger Simulator</h1>
      <button onClick={addCharger} className="px-4 py-2 bg-blue-500 text-white rounded">Add Charger</button>
      <div className="grid md:grid-cols-2 gap-4">
        {chargers.map(c => (
          <ChargerCard
            key={c.id}
            charger={c}
            onRemove={removeCharger}
            onUpdate={updateState}
          />
        ))}
      </div>
    </div>
  );
}
