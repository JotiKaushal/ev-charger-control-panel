# EV Charger Control Panel UI
A React + TypeScript frontend interface for managing a list of Electric Vehicle (EV) charger simulators. This interactive UI allows users to simulate charger lifecycles—adding, removing, and changing charger statuses.

# Features: 
 Add Charger – Adds a new charger (starts in offline state)

 Remove Charger – Deletes a charger from the list

Simulate Charger Commands:

 Turn On → online

 Start Charging → charging

 Stop Charging → ready

 Simulate Fault → fault

 # State & Error Handling Enhancements
Persistent State Management via localStorage + Redux Toolkit

Error Boundaries to gracefully catch and display runtime errors

Loading & Error UI States – Scalable structure for future async backend integration

Input Validation – Prevents invalid state transitions with user-friendly messages

# Tech Stack
 React + TypeScript (strict mode enabled, no implicit any)

 Tailwind CSS – Mobile-first design & responsiveness tested

 Vite – Fast bundling & hot reloading

 vitest + jest + React Testing Library – Unit test coverage for UI components

 Redux Toolkit – Centralized and persistent state management

 Code Splitting + Lazy Loading – Optimized performance for larger apps


# Testing
Tested state transitions
Tested status updateon UI

# Manual testing
Manually tested UI responsiveness and mobile first design in chrome browser

# Prerequisites
Node.js >= 18.x

npm

# Installation
 1. Clone the repo
 
git clone https://github.com/JotiKaushal/ev-charger-control-panel.git

cd ev-charger-control-panel

 2. Install dependencies
 
 npm install

 3. Run locally
 
npm run dev

 4. Run test
 
npm run test

# Project structure

src/
├── components/                                # UI components
├── assets/                                    # Icons used in UI
├── apis/                                      # mock apis to simulate api calls
├── context/                                   # Error context to handle errors globally
├── customHooks/                               # Hook to manage modal state
├── store/                                     # redux toolkit store to manage app data
├── types/                                     # TypeScript interfaces and enums
├── shared/utility.ts                          # Utility functions
├── shared/components                          # Reusable components
└── shared/constants.ts                        # Constant values used in the project
├── __tests__/ChargerCard.test.tsx             # Test cases
├── App.tsx                                    # Root component
└── main.tsx                                   # Entry point

