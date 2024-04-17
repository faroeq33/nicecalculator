/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        themeonedarkblue: "hsl(225, 21%, 49%)",
        themeonedarkblueshadow: "hsl(224, 28%, 35%)",
        themeonedarkestblueshadow: "hsl(224, 36%, 15%)",
        themeonemyred: "hsl(6, 63%, 50%)",
        themeonemydarkred: "hsl(6, 70%, 34%)",
        themeonelightgreyorange: "hsl(30, 25%, 89%)",
        themeonegreyorange: "hsl(28, 16%, 65%)",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
      // fontFamily: {
      //   body: ["Nunito"],
      // },
    },
  },
  plugins: [],
};
