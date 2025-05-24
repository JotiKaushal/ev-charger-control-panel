import { useState } from 'react';
import { type Charger, type ChargerState } from '../types/ChargerType';

export const useChargerStore = () => {
  const [chargers, setChargers] = useState<Charger[]>([]);

  const addCharger = () => {
    const newCharger: Charger = {
      id: crypto.randomUUID(),
      state: 'offline',
    };
    setChargers(prev => [...prev, newCharger]);
  };

  const removeCharger = (id: string) => {
    setChargers(prev => prev.filter(c => c.id !== id));
  };

  const updateState = (id: string, state: ChargerState) => {
    setChargers(prev =>
      prev.map(c => (c.id === id ? { ...c, state } : c))
    );
  };

  return { chargers, addCharger, removeCharger, updateState };
};
