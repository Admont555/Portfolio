/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "my-white": "#F5F5F5",
        "my-blue": "#30475E",
        "my-red": "#F05454",
        "my-black": "#070606 ",
        "my-darkBlue": "#16213E",
      },
    },
  },

  plugins: [],
}
