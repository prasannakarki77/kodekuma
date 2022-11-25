/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cubano: ["Cubano", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        challenge: "#06CD3E",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
