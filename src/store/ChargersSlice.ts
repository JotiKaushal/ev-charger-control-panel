// src/store/chargersSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Charger, type ChargerState } from "../types/ChargerType";
import { OFFLINE, statusIcons} from "../shared/constants";

const initialState: Charger[] = [];

const chargersSlice = createSlice({
  name: 'chargers',
  initialState,
  reducers: {
    setChargers: (_, action: PayloadAction<Charger[]>) => action.payload,
    addCharger: (state, action: PayloadAction<Charger>) => {
      action.payload.icon = statusIcons[OFFLINE];
      action.payload.state = OFFLINE;
      state.push(action.payload);
    },
    removeCharger: (state, action: PayloadAction<string>) => {
      return state.filter(charger => charger.id !== action.payload);
    },
    updateChargerState: (state, action: PayloadAction<{ id: string; state: ChargerState }>) => {
      const charger = state.find(c => c.id === action.payload.id);
      if (charger) {charger.state = action.payload.state
        charger.icon = statusIcons[action.payload.state]
      };
    },
  },
});

export const { setChargers, addCharger, removeCharger, updateChargerState } = chargersSlice.actions;
export default chargersSlice.reducer;
