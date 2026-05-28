import { themePreset } from '@sarkimota/tailwind-config';
import type { Config } from 'tailwindcss';

const config: Config = {
  presets: [themePreset],
  content: [
    './src/**/*.{ts,tsx}',
    '../../packages/ui/src/**/*.{ts,tsx}',
  ],
};

export default config;
