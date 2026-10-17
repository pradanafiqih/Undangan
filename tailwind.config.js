/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        champagne: {
          50: '#fbf9f5',
          100: '#f5f0e8',
          200: '#ebdccb',
          300: '#dec3a7',
          400: '#cca37f',
          500: '#bd885f',
          600: '#ae7351',
          700: '#915b43',
          800: '#754a3a',
          900: '#603d32',
        },
        gold: {
          100: '#fdf9ee',
          200: '#f9f0d1',
          300: '#f3e3a8',
          400: '#ecd07a',
          500: '#d4af37',
          600: '#b8942b',
          700: '#967523',
        },
        warmgray: {
          50: '#faf9f8',
          100: '#f3f1ee',
          200: '#e5e2dd',
          300: '#d2cdc5',
          400: '#a39b90',
          500: '#766e63',
          600: '#5c544b',
          700: '#463f37',
          800: '#342f2a',
          900: '#1c1917',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        script: ['"Alex Brush"', '"Great Vibes"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
