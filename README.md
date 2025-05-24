

npm create vite@latest ev-charger-control-panel --template react-ts
cd ev-charger-control-panel
npm install
npm run dev

install tailwind in react vite https://tailwindcss.com/docs/installation/framework-guides/react-router


npm install -D vitest @testing-library/react @testing-library/jest-dom

Error: Property 'toBeInTheDocument' does not exist on type 'Assertion<HTMLElement>'
issue with  setting up jest-dom

1. npm install -D @testing-library/jest-dom
2.  Create a setupTests.ts file in src/ >> import '@testing-library/jest-dom';
3. create vitest.config.ts