/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        secondary: {
            DEFAULT: '#2D4990'
        },
        primary: {
            DEFAULT: '#D5F2E8'
        }
    }
    },
  },
  plugins: [],
}

