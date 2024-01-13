/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "5px",
    },
    extend: {
      colors: {
        primary: "#14b8a6",
      },
      fontFamily: {
        sans: ["inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
