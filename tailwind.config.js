/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "aspac-green": "#459243",
        "aspac-yellow": "#EBD839",

        // semantic names
        primary: "#459243",
        accent: "#EBD839",
      },
       keyframes: {
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(0deg)' },
        },
      },
        animation: {
        'wave-hand': 'wave 2.5s infinite',
      },
    },
  },
  plugins: [],
};
