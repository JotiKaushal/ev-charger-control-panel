import { useChargerStore } from "./customHooks/useChargerStore";
import ChargerCard from "./components/ChargerCard";
import "./App.css";
import { modalTitle, modalDescription } from "./shared/constants";
import Modal from "./shared/components/Modal";

export default function App() {
  const {
    chargers,
    addCharger,
    removeCharger,
    updateState,
    isModalOpen,
    onClose,
  } = useChargerStore();

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        title={modalTitle}
        description={modalDescription}
        onClose={onClose}
      />
      <div className="max-w-4xl mx-auto my-10 p-6 space-y-4 bg-gray-100">
        <h1 className="text-3xl font-bold text-center">EV Charger Simulator</h1>
        <button
          onClick={addCharger}
          className="px-4 py-2 bg-blue-500 text-white rounded-full"
        >
          Add New
        </button>
        {chargers.length === 0 && (
          <p className="text-center text-gray-500">
            Click on 'Add New' button to add new charger
          </p>
        )}
        <div className="grid md:grid-cols-2 gap-4">
          {chargers.map((c) => (
            <ChargerCard
              key={c.id}
              charger={c}
              onRemove={removeCharger}
              onUpdate={updateState}
            />
          ))}
        </div>
      </div>
    </>
  );
}
