/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonPurple: '#9D00FF',
        neonBlue: '#00D1FF',
      },
      animation: {
        'pulse-slow': 'pulse 3s infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}


