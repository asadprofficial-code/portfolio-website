/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#0f6b7d", dark: "#0b5260", light: "#e6f2f4" },
        ink: { DEFAULT: "#0e1f23", muted: "#5b6a6d" },
        line: "#dde5e6",
      },
      maxWidth: { site: "1160px" },
    },
  },
  plugins: [],
};
