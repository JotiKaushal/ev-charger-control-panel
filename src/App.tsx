import { MAX_LIMIT } from "./shared/constants";
import { useDispatch, useSelector } from "react-redux";
import { addCharger, setChargers } from "./store/ChargersSlice";
import ChargersList from "./components/ChargersList";
import type { Charger } from "./types/ChargerType";
import type { RootState } from "./store";
import { useEffect } from "react";
import { mockApi } from "./apis/mockapis";
import { useError } from "./context/ErrorContext";

export default function App() {
  const {error, setError } = useError();
  const dispatch = useDispatch();
 const chargers: Charger[] = useSelector((state: RootState) => state.chargers);

  useEffect(() => {
    try {
    const savedChargers = mockApi.fetchChargers();
      if (savedChargers) {
        dispatch(setChargers(savedChargers));
      }
    } catch (err) {
     if (err instanceof Error) setError(err.message);
      else setError('Unknown error occurred while fetching chargers.');
    }
  }, []);

  function addNewCharger() {
    try {
      const id = crypto.randomUUID();
      mockApi.addNewCharger(id);
      dispatch(addCharger({ id }));

    } catch (err) {
  if (err instanceof Error) setError(err.message);
      else setError('Unknown error occurred while adding new charger.');
    }
  }

  return (
    <>
      <div className="max-w-4xl mx-auto my-2 h-lvh p-6 space-y-4 bg-gray-100">
        <h1 className="sm:text-lg md:text-xl lg:text-2xl font-bold text-center">EV Charger Simulator</h1>
       <div className="flex gap-10 w-full justify-between">
        <button
          onClick={addNewCharger}
          disabled={chargers.length === MAX_LIMIT}
          className="px-4 py-2 bg-blue-500 text-white rounded-full cursor-pointer sm:text-lg md:text-xl lg:text-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Add New
        </button>
        <p className="text-center sm:text-lg md:text-xl lg:text-2xl text-red-600 font-bold">{error}</p>
        </div>
        <ChargersList />
      </div>
    </>
  );
}
