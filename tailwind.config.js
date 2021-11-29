module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: "#060605",
        gray: {
          dark: "#737373",
          DEFAULT: "#D4D4D4",
          light: "#F5F5F5",
        },
        orange: "#F59934",
      },
      fontFamily: {
        "brand-regular": ["TT Firs Neue W01 Regular", "sans-serif"],
        "brand-bold": ["TT Firs Neue W01 Bold", "sans-serif"],
      },
      screens: {
        landscape: { raw: "(orientation: landscape)" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-hyphens")],
};
