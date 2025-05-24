import { useState } from "react";
import { type Charger, type ChargerState } from "../types/ChargerType";
import { statusIcons, OFFLINE, MAX_LIMIT } from "../shared/constants";

export const useChargerStore = () => {
  const [chargers, setChargers] = useState<Charger[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const addCharger = () => {
    const newCharger: Charger = {
      id: crypto.randomUUID(),
      state: OFFLINE,
      icon: statusIcons[OFFLINE],
    };
    if (chargers.length === MAX_LIMIT) {
      setIsModalOpen(true);
      return;
    }
    setChargers((prev) => [...prev, newCharger]);
  };

  const removeCharger = (id: string) => {
    setChargers((prev) => prev.filter((c) => c.id !== id));
  };

  const updateState = (id: string, state?: ChargerState) => {
    if (!state) return;
    const icon = statusIcons[state];
    setChargers((prev) =>
      prev.map((c) => (c.id === id ? { ...c, state, icon } : c))
    );
  };

  const onClose = () => {
    setIsModalOpen((prev) => !prev);
  };

  return {
    chargers,
    isModalOpen,
    addCharger,
    removeCharger,
    updateState,
    onClose,
  };
};
