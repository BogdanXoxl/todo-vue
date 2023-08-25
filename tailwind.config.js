/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#41B883",
        secondary: "#34495E",
        danger: "#C1292E",
        "primary-white": "#FDFFFC"
      }
    }
  },
  plugins: []
};
