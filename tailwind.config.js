/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        clicky: ["Gill Sanst MT", "Trebuchet MS", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
});
