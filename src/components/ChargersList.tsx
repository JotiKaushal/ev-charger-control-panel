import { type Charger } from "../types/ChargerType";
import ChargerCard from "./ChargerCard";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import { MAX_LIMIT } from "../shared/constants";

export default function ChargerList() {
  const chargers: Charger[] = useSelector((state: RootState) => state.chargers);
  return (
    <>
      {chargers.length === 0 && (
        <p className="text-center text-gray-500 lg:text-xl md:text-xl sm:text-2xl">
          Click on 'Add New' button to add new charger
        </p>
      )}
      {chargers.length === MAX_LIMIT && (
        <p className="text-center text-red-600 sm:text-sm md:text-lg lg:text-xl">
          Limit reached, maximum 10 chargers are allowed.
        </p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {chargers.map((c) => (
          <ChargerCard key={c.id} charger={c} />
        ))}
      </div>
    </>
  );
}
