import {screen, fireEvent } from '@testing-library/react';
import { describe, it, vi, expect,beforeEach } from 'vitest';
import type { Charger } from '../types/ChargerType'; 
import ChargerControls from '../components/ChargerControls';
import { renderWithProviders } from './test-utils';
import { useDispatch } from "react-redux";
import { useError } from "../context/ErrorContext";
import { CHARGING, FAULT, ONLINE, READY } from '../shared/constants';

// Mock dependencies
vi.mock("react-redux", async () => {
  const actual = await vi.importActual<typeof import("react-redux")>("react-redux");
  return {
    ...actual,
    useDispatch: vi.fn(),
  };
});

// Other mocks remain the same
vi.mock("../apis/mockapis", () => ({
  mockApi: {
    deleteCharger: vi.fn(),
    saveChargers: vi.fn(),
  },
}));

vi.mock("../context/ErrorContext", async () => {
  const actual = await vi.importActual<typeof import("../context/ErrorContext")>(
    "../context/ErrorContext"
  );
 return {
  ...actual,
    useError: vi.fn(),
};
});

const mockDispatch = vi.fn();
const mockSetError = vi.fn();


describe('ChargerControls', () => {
beforeEach(() => {
  vi.clearAllMocks();
  (useDispatch as unknown as vi.Mock).mockReturnValue(mockDispatch);
  (useError as unknown as vi.Mock).mockReturnValue({ setError: mockSetError });
});

  const offlineCharger: Charger = { id: '1', state: 'offline', icon:"" };
  const onlineCharger: Charger = { id: '1', state: 'online', icon:"" };
  const onCharging: Charger = { id: '1', state: 'charging', icon:"" };

  it('renders charger and control buttons', () => {
    renderWithProviders(<ChargerControls charger={offlineCharger}/>);

    expect(screen.getByTestId('1_online')).toBeInTheDocument();
    expect(screen.getByTestId('1_fault')).toBeInTheDocument();
    expect(screen.getByTestId('1_delete')).toBeInTheDocument();
  });

   it('turn on charger', () => {
    renderWithProviders(<ChargerControls charger={offlineCharger}/>);
    expect(screen.getByTestId('1_online')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('1_online'));
     expect(mockDispatch).toHaveBeenCalledWith({
      type: "chargers/updateChargerState",
      payload: { id: "1", state: ONLINE },
    });
  });

  it('remove charger', () => {
    renderWithProviders(<ChargerControls charger={offlineCharger} />);
    expect(screen.getByTestId('1_delete')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('1_delete'));
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "chargers/removeCharger",
      payload: "1",
    });
  });

  it('change charger state to fault', () => {
    renderWithProviders(<ChargerControls charger={offlineCharger}/>);
    expect(screen.getByTestId('1_fault')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('1_fault'));
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "chargers/updateChargerState",
      payload: { id: "1", state: FAULT },
    });
  });

  it('turn on charging', () => {
    renderWithProviders(<ChargerControls charger={onlineCharger}/>);
    expect(screen.getByTestId('1_charging')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('1_charging'));
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "chargers/updateChargerState",
      payload: { id: "1", state: CHARGING },
    });
  });

  it('turn off charging', () => {
    renderWithProviders(<ChargerControls charger={onCharging}/>);
    expect(screen.getByTestId('1_ready')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('1_ready'));
     expect(mockDispatch).toHaveBeenCalledWith({
      type: "chargers/updateChargerState",
      payload: { id: "1", state: READY },
    });
  });
 });
