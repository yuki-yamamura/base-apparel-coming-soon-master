/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGrayish: "hsl(0, 6%, 24%)",
        desaturatedRed: "hsl(0, 93%, 68%)",
        // softRed: "hsl(0, 93%, 68%)",
        softRed: "hsl(0, 36%, 70%, 100%)",
        pink: {
          100: "hsl(0, 86%, 86%, 100%)",
          200: "hsl(0, 74%, 74%, 100%)",
        },
      },
    },
    fontFamily: {
      sans: ["Josefin Sans", "sans-serif"],
    },
  },
  plugins: [],
};
