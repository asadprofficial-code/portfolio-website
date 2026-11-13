/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#5b21b6", dark: "#4c1d95", light: "#f1ebfd" },
        ink: { DEFAULT: "#14111f", muted: "#5f5a6e" },
        line: "#e6e1ef",
      },
      maxWidth: { site: "1160px" },
    },
  },
  plugins: [],
};
