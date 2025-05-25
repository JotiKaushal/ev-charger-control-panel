export type ChargerState = 'offline' | 'online' | 'charging' | 'ready' | 'fault' | 'delete' ;

export interface Charger {
  id: string;
  state: ChargerState;
  icon: string
}
