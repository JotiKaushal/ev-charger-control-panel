import { render, screen } from '@testing-library/react';
import ChargerCard from '../components/ChargerCard';
import { describe, it, vi, expect } from 'vitest';
import type { Charger } from '../types/ChargerType'; 

describe('ChargerCard', () => {
  it('charger status is offline', () => {
    const offlineCharger: Charger = { id: '1', state: 'offline', icon:"" };
    const mockRemove = vi.fn();
    const mockUpdate = vi.fn();
    render(<ChargerCard charger={offlineCharger} onRemove={mockRemove} onUpdate={mockUpdate} />);
    expect(screen.getByText(/offline/)).toBeInTheDocument();
  });

   it('charger status is online', () => {
   const onlineCharger: Charger = { id: '1', state: 'online', icon:"" };
    const mockRemove = vi.fn();
    const mockUpdate = vi.fn();
    render(<ChargerCard charger={onlineCharger} onRemove={mockRemove} onUpdate={mockUpdate} />);
    expect(screen.getByText(/online/)).toBeInTheDocument();
  });

  it('charger status is on charging', () => {
   const onCharging: Charger = { id: '1', state: 'charging', icon:"" };
    const mockRemove = vi.fn();
    const mockUpdate = vi.fn();
    render(<ChargerCard charger={onCharging} onRemove={mockRemove} onUpdate={mockUpdate} />);
    expect(screen.getByText(/on charging/)).toBeInTheDocument();
  });

  it('charger status is ready to use', () => {
    const ready: Charger = { id: '1', state: 'ready', icon:"" };
    const mockRemove = vi.fn();
    const mockUpdate = vi.fn();
    render(<ChargerCard charger={ready} onRemove={mockRemove} onUpdate={mockUpdate} />);
    expect(screen.getByText(/ready to use/)).toBeInTheDocument();
  });

   it('charger status is faulty', () => {
   const faultyCharger: Charger = { id: '1', state: 'fault', icon:"" };
    const mockRemove = vi.fn();
    const mockUpdate = vi.fn();
    render(<ChargerCard charger={faultyCharger} onRemove={mockRemove} onUpdate={mockUpdate} />);
    expect(screen.getByText(/error, delete and add new/)).toBeInTheDocument();
  });

});
