module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { "900_7f": "#0000007f", "900_3f": "#0000003f" },
        blue_gray: { 100: "#d9d9d9", 900: "#373636" },
        gray: {
          800: "#383838",
          900: "#111111",
          "800_01": "#444444",
          "500_00": "#9e9e9e00",
        },
        light_green: { A700: "#4cbb17" },
        white: {
          A700_99: "#ffffff99",
          A700_cc: "#ffffffcc",
          A700_00: "#ffffff00",
          A700: "#ffffff",
        },
      },
      fontFamily: { poppins: "Poppins", inter: "Inter" },
      backgroundImage: {
        gradient: "linear-gradient(130deg ,#383838,#9e9e9e00)",
        gradient1: "linear-gradient(67deg ,#ffffff,#ffffff00)",
      },
      boxShadow: {
        bs: "0px 4px  40px 0px #0000003f",
        bs1: "10px 10px  4px 0px #0000007f",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
