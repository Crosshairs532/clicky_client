/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        clicky: ["Gill Sanst MT", "Trebuchet MS", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
