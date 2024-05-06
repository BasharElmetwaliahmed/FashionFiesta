/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container:{
        center:true,
        padding:'1rem'

      },
      colors: {
        primary: {
          50: "#f2f5f9",
          100: "#e6ebf2",
          200: "#cbd6e6",
          300: "#adc2d9",
          400: "#8099bf",
          500: "#4d749f",
          600: "#446a8f",
          700: "#37587a",
          800: "#2b4664",
          900: "#213b50",
        },
        secondary: {
          50: "#f5f5f5",
          100: "#ebebeb",
          200: "#cccccc",
          300: "#adadad",
          400: "#707070",
          500: "#333333",
          600: "#2d2d2d",
          700: "#252525",
          800: "#1e1e1e",
          900: "#141414",
        },
        accent: {
          50: "#f9f5f2",
          100: "#f2ebe6",
          200: "#e6d6cb",
          300: "#d9c2ad",
          400: "#bf9980",
          500: "#9f744d",
          600: "#8f6a44",
          700: "#7a5837",
          800: "#64502b",
          900: "#503b21",
        },
      },
    },
  },
  plugins: [],
};
