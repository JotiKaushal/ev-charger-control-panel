import { type Charger } from "../types/ChargerType";
import { getShortName } from "../shared/utility";
import Tooltip from "../shared/components/Tooltip";
import { lazy, Suspense } from "react";
const ChargerControls = lazy(() => import("./ChargerControls"));
type Props = {
  charger: Charger;
};

export default function ChargerCard({ charger }: Props) {
  return (
    <div className="p-4 border rounded-xl shadow bg-white space-y-2">
      <div className="flex justify-between items-center">
        <h2 className="font-bold sm:text-sm md:text-sm lg:text-lg">{getShortName(charger.id)} </h2>

        <div className="relative group inline-block">
          <img src={charger.icon} alt="status" />
          <Tooltip status={charger.state} controls={false} />
        </div>
      </div>
      <Suspense fallback={<div>Loading controls...</div>}>
        <ChargerControls charger={charger} />
      </Suspense>
    </div>
  );
}
