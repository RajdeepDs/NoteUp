/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        primary: "#0D6EFD",
        secondary: "#9AC1F1",
        bg: "#FFFFFF",
        black: "#001834",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-josefin-sans)"],
      },
    },
  },
  plugins: [],
};
