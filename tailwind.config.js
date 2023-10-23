/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navBg: "#232536",
        btnBg: "#444CFC",
        "p-text": "#5D5F6D",
      },
    },
  },
  plugins: [],
};
