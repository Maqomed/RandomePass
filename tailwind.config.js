/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customPurple: {
          light: "#D8BFD8",
          darkLight: "#b45ee3",
          medium: "#26173c",
          dark: "#0b0611",
        },
        customBlue: {
          light: "#add8e6",
          DEFAULT: "#0000ff",
          dark: "#00008b",
        },
      },
    },
  },
  plugins: [],
};
