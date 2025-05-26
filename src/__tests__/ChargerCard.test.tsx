import { screen } from '@testing-library/react';
import ChargerCard from '../components/ChargerCard';
import { describe, it, expect } from 'vitest';
import type { Charger } from '../types/ChargerType'; 
import { renderWithProviders } from './test-utils';

describe('ChargerCard', () => {
  it('charger status is offline', () => {
    const offlineCharger: Charger = { id: '1', state: 'offline', icon:"" };
    renderWithProviders(<ChargerCard charger={offlineCharger}/>);
    expect(screen.getByText(/offline/)).toBeInTheDocument();
  });

   it('charger status is online', () => {
   const onlineCharger: Charger = { id: '1', state: 'online', icon:"" };
    renderWithProviders(<ChargerCard charger={onlineCharger}/>);
    expect(screen.getByText(/online/)).toBeInTheDocument();
  });

  it('charger status is on charging', () => {
   const onCharging: Charger = { id: '1', state: 'charging', icon:"" };
    renderWithProviders(<ChargerCard charger={onCharging}/>);
    expect(screen.getByText(/on charging/)).toBeInTheDocument();
  });

  it('charger status is ready to use', () => {
    const ready: Charger = { id: '1', state: 'ready', icon:"" };
    renderWithProviders(<ChargerCard charger={ready} />);
    expect(screen.getByText(/ready to use/)).toBeInTheDocument();
  });

   it('charger status is faulty', () => {
   const faultyCharger: Charger = { id: '1', state: 'fault', icon:"" };
    renderWithProviders(<ChargerCard charger={faultyCharger}/>);
    expect(screen.getByText(/error, delete and add new/)).toBeInTheDocument();
  });

});
