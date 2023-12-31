/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      "light-blue": "#31c3bd",
      "light-blue-hover": "#65e9e4",
      "light-yellow": "#f2b137",
      "light-yellow-hover": "#ffc860",
      "dark-navy": "#1a2a33",
      "semi-dark-navy": "#1f3641",
      silver: "#a8bfc9",
      silver_5: "rgba(168, 191, 201, 0.05)",
      silver_50: "rgba(168, 191, 201, 0.5)",
      "silver-hover": "#dbe8ed",
      dark_50: "rgba(0, 0, 0, 0.5)",
    },
    fontFamily: {
      outfit: ["Outfit", "Arial", "sans-serif"],
    },
    extend: {
      boxShadow: {
        "dark-shadow": "0px -8px 0px 0px #10212a inset",
        "dark-shadow-small": "0px -4px 0px 0px #10212a inset",
        "light-yellow-shadow": "0px -8px 0px 0px #cc8b13 inset",
        "light-yellow-shadow-small": "0px -4px 0px 0px #cc8b13 inset",
        "silver-shadow": "0px -8px 0px 0px #118c87 inset",
        "silver-shadow-small": "0px -4px 0px 0px #118c87 inset",
      },
    },
  },
  plugins: [require("daisyui")],
};
