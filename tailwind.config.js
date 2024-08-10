/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.pink[500],
        dbg: "#05061B",
        dcard: "#070E27",
      },
    },
  },
  plugins: [],
};
