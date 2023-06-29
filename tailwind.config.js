/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        appdev: "#CA4238",
        black: "#0F0F0F",
        gray: "#848482",
        offWhite1: "#F8F8F8",
        offWhite2: "#F0F0F0",
        primary: "#075DF8",
        white: "#FDFDFD",
      },
      fontFamily: {
        rhdisplay: ["Red Hat Display", "sans-serif"],
      },
      fontSize: {
        "3xl": "2rem",
      },
    },
  },
  plugins: [],
};
