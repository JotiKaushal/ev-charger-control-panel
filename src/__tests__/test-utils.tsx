// src/test-utils.tsx
import {type ReactElement } from 'react';
import { render, type RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore, type EnhancedStore } from '@reduxjs/toolkit';
import chargersReducer from '../store/ChargersSlice';
import { ErrorProvider } from '../context/ErrorContext';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  store?: EnhancedStore;
}

export function renderWithProviders(
  ui: ReactElement,
  {
    store = configureStore({
      reducer: { chargers: chargersReducer },
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <Provider store={store}>
        <ErrorProvider>{children}</ErrorProvider>
      </Provider>
    );
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
