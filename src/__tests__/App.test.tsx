import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import { describe, it, expect } from 'vitest';

describe('App', () => {
  it('Add new charger', () => {
    render(<App  />);
    expect(screen.getByText(/EV Charger Simulator/)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText(/Click on 'Add New' button to add new charger/)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByText('click to turn on')).toBeInTheDocument();
  });
});
