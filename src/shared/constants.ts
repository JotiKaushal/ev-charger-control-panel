import offline from '../assets/offline.png'
import online from '../assets/online.png'
import onCharging from '../assets/onCharging.png';
import fault from '../assets/fault.png';
import ready from '../assets/ready.png';
import type { ChargerState } from '../types/ChargerType';

export const MAX_LIMIT = 10;
export const ONLINE: ChargerState = "online"
export const OFFLINE: ChargerState = "offline"
export const READY: ChargerState = "ready"
export const DELETE: ChargerState = "delete"
export const CHARGING: ChargerState = "charging"
export const FAULT: ChargerState = "fault"
export const statusIcons = {"offline": offline, "online": online, "charging":onCharging, "fault": fault, "ready": ready, "delete":""}
export const modalTitle= "LIMIT REACHED"
export const modalDescription= "Limit reached, maximum 10 chargers are allowed."
export const controlsTooltipText = {"offline": "click to turn off", "online": "click to turn on", "charging":"click to charge", "fault": "click to simulate fault", "ready": "click to stop charging", "delete": "click to delete"}
export const statusToolttip = {"offline": "offline", "online": "online", "charging":"on charging", "fault": "error, delete and add new", "ready": "ready to use", "delete": ""}