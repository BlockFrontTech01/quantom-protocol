/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavenderblush: "#fdf0f3",
        black: "#000",
        white: "#fff",
        gray: "#19181d",
        gold: "#ffdd07",
        red: "#fc0e0e",
      },
      spacing: {},
      fontFamily: {
        inika: "Inika",
        hanuman: "Hanuman",
        "goblin-one": "'Goblin One'",
      },
      borderRadius: {
        xl: "20px",
        "3xs": "10px",
      },
    },
    fontSize: {
      mini: "15px",
      mid: "17px",
      "6xl": "25px",
      lg: "18px",
      "11xl": "30px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
