/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-primary": "#14151A",
        "base-tertiary": "#0D112666",
        "base-secondary": "rgba(15, 19, 36, 0.6)",
        "base-secondary-hover": "#F7F7F8",
        "base-inverted": "#0B0C0E",
        "base-divider": "#E9EAEC",
        "alpha-black-40": "#00000066",
        "action-normal": "#DEE0E3",
        "focus-destructive-light": "#F08B85",
        "overlay-active-normal": "#0A0F290A",
      },
      boxShadow: {
        "base-light": "0px 1px 2px 0px rgba(20, 21, 26, 0.05)",
        "focus-gray": "0px 0px 0px 2px #BFC0C4",
        "focus-red": "0px 0px 0px 2px #FFB2B299",
      },
    },
  },
  plugins: [],
};
