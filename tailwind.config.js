/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        appdev: "#CA4238",
        black: "#0F0F0F",
        code: "#CA4238",
        cornell: "#D41F1F",
        github: "#333",
        gray: "#848482",
        instagram: "#C13584",
        linkedin: "#0072b1",
        offWhite1: "#F8F8F8",
        offWhite2: "#F0F0F0",
        primary: "#075DF8",
        twitch: "#6441A5",
        white: "#FDFDFD",
      },
      fontFamily: {
        rhdisplay: ["Red Hat Display", "sans-serif"],
      },
      fontSize: {
        "2.5xl": "1.75rem",
        "3xl": "2rem",
      },
    },
  },
  plugins: [],
};
