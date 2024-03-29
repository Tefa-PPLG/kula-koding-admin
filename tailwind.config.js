/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F5F8FD",
        secondary: "#212538",
        dark: "#212538",
        light: "#FFF",
        kuning: "#FFAC0B",
      },
    },
  },
  plugins: [],
};
