import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "themeone-dark-desaturated-blue": "hsl(222, 26%, 31%)",
        "themeone-toggle-background": "hsl(223, 31%, 20%)",
        "themeone-screen-background": "hsl(224, 36%, 15%)",
        "themeone-key-background": "hsl(225, 21%, 49%)",
        "themeone-key-shadow": "hsl(224, 28%, 35%)",
        "themeone-red": "hsl(6, 63%, 50%)",
        "themeone-dark-red": "hsl(6, 70%, 34%)",
        "themeone-light-grayish-orange": "hsl(30, 25%, 89%)",
        "themeone-grayish-orange": "hsl(28, 16%, 65%)",
        "themeone-very-dark-grayish-blue": "hsl(221, 14%, 31%)",
        "themeone-white": "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        sans: ["League Spartan", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
