export type ChargerState = 'offline' | 'online' | 'charging' | 'ready' | 'fault';

export interface Charger {
  id: string;
  state: ChargerState;
}
