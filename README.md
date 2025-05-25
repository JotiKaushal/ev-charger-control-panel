# INTRO: 
A frontend interface for managing a list of EV (Electric Vehicle) charger simulators. This project implements a basic UI that allows users to manage EV charger simulators. 
It provides controls to add, remove, and update the status of simulated chargers. The backend logic is not part of this. The UI operates on the component's local state.

# Features: 
Add EV charger simulator (starts in the offline state)
Remove charger
Simulate charger commands (buttons):
Turn On (→ online)
Start Charging (→ charging)
Stop Charging (→ ready)
Simulate Fault (→ fault)
Component local state is used (resets on browser refresh)

# Tech Stack
React (with TypeScript)
Tailwind CSS for styling
Local state management (using useState)
Vite for fast build and development
Jest + React Testing Library for unit tests

# Prerequisites
Node.js >= 18.x
npm

Installation
# Clone the repo
git clone https://github.com/JotiKaushal/ev-charger-control-panel.git
cd ev-charger-control-panel

# Install dependencies
npm install

# Run locally
npm run dev

# Run test
npm run test

# Project structure

src/
├── components/                                # UI components
├── assets/                                    # Icons used in UI
├── customHooks/useChargerStore.ts             # App state
├── types/                                     # TypeScript interfaces and enums
├── shared/utility.ts                          # Utility functions
├── shared/components                          # Reusable components
└── shared/constants.ts                        # Constant values used in the project
├── __tests__/ChargerCard.test.tsx             # Test cases
├── App.tsx                                    # Root component
└── main.tsx                                   # Entry point

