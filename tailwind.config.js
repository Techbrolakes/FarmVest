module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Spartan"],
        link: ["lato"],
      },
      colors: {
        mainGreen: "#008000",
        primaryText: "#263238",
      },
    },
  },
  plugins: [],
};
