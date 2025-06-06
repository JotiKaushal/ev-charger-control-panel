import { screen, fireEvent } from '@testing-library/react';
import App from '../App';
import { describe, it, expect } from 'vitest';
import { renderWithProviders } from './test-utils';

describe('App', () => {
  it('Add new charger', () => {
    renderWithProviders(<App />);
    expect(screen.getByText(/EV Charger Simulator/)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText(/Click on 'Add New' button to add new charger/)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByText('Loading controls...')).toBeInTheDocument();
  });
});
