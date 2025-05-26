// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import chargersReducer from './ChargersSlice';

const store = configureStore({
  reducer: {
    chargers: chargersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
