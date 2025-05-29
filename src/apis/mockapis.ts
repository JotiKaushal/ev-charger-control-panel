// mockApi.ts
import { type Charger, type ChargerState } from "../types/ChargerType";
import { OFFLINE, statusIcons } from "../shared/constants";
import {STORAGE_KEY} from '../shared/constants'

export const mockApi = {
  saveCharger: (id: string, state: ChargerState): void => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data !== null) {
        const parsed: unknown = JSON.parse(data);
        if (Array.isArray(parsed)) {
          let result = parsed.filter(isValidCharger);
          let icon = statusIcons[state];
          result = result.map((c) => (c.id === id ? { ...c, state, icon } : c));
          localStorage.setItem(STORAGE_KEY, JSON.stringify(result));
        }
      }
    } catch (error) {
      console.error("Failed to save charger to localStorage", error);
       throw new Error("Failed to save charger");
    }
  },
  addNewCharger: (id: string) => {
    try {
      const newCharger: Charger = {
        id: id,
        state: OFFLINE,
        icon: statusIcons[OFFLINE],
      };
      const data = localStorage.getItem(STORAGE_KEY);
      if (data !== null) {
        const parsed: unknown = JSON.parse(data);
        if (Array.isArray(parsed)) {
          let result = parsed.filter(isValidCharger);
          result = [...result, newCharger];
          localStorage.setItem(STORAGE_KEY, JSON.stringify(result));
        }
      } else {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newCharger));
      }
    } catch (error) {
      console.error("Failed to add new charger to localStorage", error); // log error 
      throw new Error("Failed to add new charger");
    }
  },
  deleteCharger: (id: string): void => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data !== null) {
        const parsed: unknown = JSON.parse(data);
        if (Array.isArray(parsed)) {
          let result = parsed.filter(isValidCharger);
          result = result.filter((c) => c.id !== id);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(result));
        }
      }
    } catch (error) {
      console.error("Failed to delete charger from localStorage", error);
      throw new Error("Failed to delete charger");
    }
  },

  fetchChargers: (): Charger[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) return [];

      const parsed: unknown = JSON.parse(data);
      if (Array.isArray(parsed)) {
        return parsed.filter(isValidCharger);
      }
    } catch (error) {
      console.error("Failed to fetch chargers from localStorage", error);
        throw new Error("Failed to fetch chargers");
    }
    return [];
  },
};

// Type guard to ensure data structure
function isValidCharger(obj: unknown): obj is Charger {
  if (typeof obj !== "object" || obj === null) return false;
  const charger = obj as Charger;
  return (
    typeof charger.id === "string" &&
    charger.state !== undefined &&
    ["offline", "online", "charging", "fault", "ready"].includes(charger.state)
  );
}
