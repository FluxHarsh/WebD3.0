/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          500: "#8094ad",
          700: "#002b5b",
          200:"#002b5b",
        },
        green: {
          400: "#36c6c0",
        },
      },
    },
  },
  plugins: [],
};
