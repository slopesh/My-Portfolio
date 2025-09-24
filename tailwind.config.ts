import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'leaguespartan': ['League Spartan', 'sans-serif'],
      },
      colors: {
        text: '#ffffff',
        background: '#0a0a0a',
        primary: '#111111',
        middle: '#181818',
        secondary: '#1F1F1F',
        accent: '#333333',
        // Navy blue variants for subtle accents
        navy: {
          50: '#f0f4ff',
          100: '#e0e8ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#0A0E27', // Deep navy for accents
        },
      },
      borderWidth: {
        1: '1px',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-20deg)' },
          '75%': { transform: 'rotate(20deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        'wave': 'wave 0.8s linear',
      },
    },
  },
  plugins: [],
};
export default config;
