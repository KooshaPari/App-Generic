# App-Generic

React Native boilerplate for utility-style mobile applications. A modular starting point for future apps, optimized for easy customization.

## Stack
- Language: JavaScript (React Native)
- Framework: Expo (managed workflow)
- Key deps: React Native, Expo, Babel, Metro bundler

## Structure
- `Components/`: Reusable UI components (modular, self-contained)
- `App.js`: Application entry point and navigation root
- `assets/`: Static images and fonts
- `app.json`: Expo configuration

## Key Patterns
- Module-first: each feature is a standalone Component that can be dropped in or removed
- Expo managed workflow — no native code changes without ejecting
- Dark/light theme support via `dark.json` and `light.json` theme definitions

## Adding New Functionality
- New screens: add as a component in `Components/` and register in `App.js`
- New theme tokens: update `dark.json` and `light.json`
- New dependencies: prefer Expo-compatible packages
- Run `npx expo start` for local development
