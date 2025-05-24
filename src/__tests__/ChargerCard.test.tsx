import { render, screen, fireEvent } from '@testing-library/react';
import ChargerCard from '../components/ChargerCard';
import { describe, it, vi, expect } from 'vitest';
import type { Charger } from '../types/ChargerType'; 

describe('ChargerCard', () => {
  const offlineCharger: Charger = { id: '1', state: 'offline', icon:"" };
  const onlineCharger: Charger = { id: '1', state: 'online', icon:"" };
  const onCharging: Charger = { id: '1', state: 'charging', icon:"" };

  it('renders charger and control buttons', () => {
    const mockRemove = vi.fn();
    const mockUpdate = vi.fn();
    render(<ChargerCard charger={offlineCharger} onRemove={mockRemove} onUpdate={mockUpdate} />);
    
    expect(screen.getByText(/1/)).toBeInTheDocument();
    expect(screen.getByTestId('1_online')).toBeInTheDocument();
    expect(screen.getByTestId('1_fault')).toBeInTheDocument();
     expect(screen.getByTestId('1_delete')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('1_online'));
    expect(mockUpdate).toHaveBeenCalledWith('1', 'online');
    
  });

   it('turn on charger', () => {
    const mockRemove = vi.fn();
    const mockUpdate = vi.fn();
    render(<ChargerCard charger={offlineCharger} onRemove={mockRemove} onUpdate={mockUpdate} />);
    
    expect(screen.getByText(/1/)).toBeInTheDocument();
    expect(screen.getByTestId('1_online')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('1_online'));
    expect(mockUpdate).toHaveBeenCalledWith('1', 'online');
  });

  it('remove charger', () => {
    const mockRemove = vi.fn();
    const mockUpdate = vi.fn();
    render(<ChargerCard charger={offlineCharger} onRemove={mockRemove} onUpdate={mockUpdate} />);
    
    expect(screen.getByText(/1/)).toBeInTheDocument();
    expect(screen.getByTestId('1_delete')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('1_delete'));
    expect(mockRemove).toHaveBeenCalledWith('1', 'delete');
  });

  it('change charger state to fault', () => {
    const mockRemove = vi.fn();
    const mockUpdate = vi.fn();
    render(<ChargerCard charger={offlineCharger} onRemove={mockRemove} onUpdate={mockUpdate} />);
    
    expect(screen.getByText(/1/)).toBeInTheDocument();
    expect(screen.getByTestId('1_fault')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('1_fault'));
    expect(mockUpdate).toHaveBeenCalledWith('1', 'fault');
  });

  it('turn on charging', () => {
    const mockRemove = vi.fn();
    const mockUpdate = vi.fn();
    render(<ChargerCard charger={onlineCharger} onRemove={mockRemove} onUpdate={mockUpdate} />);
    
    expect(screen.getByText(/1/)).toBeInTheDocument();
    expect(screen.getByTestId('1_charging')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('1_charging'));
    expect(mockUpdate).toHaveBeenCalledWith('1', 'charging');
  });

  it('turn off charging', () => {
    const mockRemove = vi.fn();
    const mockUpdate = vi.fn();
    render(<ChargerCard charger={onCharging} onRemove={mockRemove} onUpdate={mockUpdate} />);
    
    expect(screen.getByText(/1/)).toBeInTheDocument();
    expect(screen.getByTestId('1_ready')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('1_ready'));
    expect(mockUpdate).toHaveBeenCalledWith('1', 'ready');
  });
});
