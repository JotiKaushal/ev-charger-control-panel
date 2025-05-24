import { render, screen, fireEvent } from '@testing-library/react';
import ChargerCard from '../components/ChargerCard';
import { describe, it, vi, expect } from 'vitest';
import type { Charger } from '../types/ChargerType'; 

describe('ChargerCard', () => {
  const charger: Charger = { id: '1', state: 'offline' };

  it('renders charger info and buttons', () => {
    const mockRemove = vi.fn();
    const mockUpdate = vi.fn();
    render(<ChargerCard charger={charger} onRemove={mockRemove} onUpdate={mockUpdate} />);
    
    expect(screen.getByText(/Charger ID/)).toBeInTheDocument();
    expect(screen.getByText('Turn On')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Turn On'));
    expect(mockUpdate).toHaveBeenCalledWith('1', 'online');
  });
});
