/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: "'Ubuntu', sans-serif",
      },
      backgroundImage: {
        "green-white": "linear-gradient(to bottom, #4F826F  18% , #F2F2F0 18%);",
      },
    },
  },
  plugins: [],
};
