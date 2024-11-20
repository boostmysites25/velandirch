/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // 'primary': '#5B6CFF',
        headerbackgroundcolor: "#f4f4f4",
        headertextcolor: "#272727",
        headertexthoverandactive: "#ea5d26",
        backgroundcolor: "#faf3ef",
        primarytextcolor: "#333333",
        footerbackgrouncolor: "#cccccc",
        primary: "#ea5d26",
        secondary: "#007acc",
        tertiary: "#2773A7",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        section4: "url('/src/assets/images/section4-img.png')",
      },
    },
  },
  plugins: [],
};
