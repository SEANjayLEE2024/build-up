/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#14151A",
      },
      boxShadow: {
        light: "0px 1px 2px 0px rgba(20, 21, 26, 0.05)",
      },
      borderColor: {
        gray: "#DEE0E3",
      },
    },
  },
  plugins: [],
};
