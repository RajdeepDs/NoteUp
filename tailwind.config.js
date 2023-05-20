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
    colors: {
      foreground: "#000",
      background: "#fff",
      accent: {
        1: "#fafafa",
        2: "#eaeaea",
        3: "#999",
        4: "#888",
        5: "#666",
        6: "#444",
        7: "#333",
        8: "#111",
      },
      success: {
        lighter: "#d3e5ff",
        light: "#3291ff",
        DEFAULT: "#0070f3",
        dark: "#0761d1",
      },
      error: {
        lighter: "#f7d4d6",
        light: "#ff1a1a",
        DEFAULT: "#e00",
        dark: "#c50000",
      },
      warning: {
        lighter: "#ffefcf",
        light: "#f7b955",
        DEFAULT: "#f5a623",
        dark: "#ab570a",
      },
      cyan: {
        lighter: "#aaffec",
        light: "#79ffe1",
        DEFAULT: "#50e3c2",
        dark: "#29bc9b",
      },
      violet: {
        lighter: "#e3d7fc",
        light: "#8a63d2",
        DEFAULT: "#7928ca",
        dark: "#4c2889",
      },
      highlight: {
        alert: "#ff0080",
        purple: "#f81ce5",
        magenta: "#eb367f",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-josefin-sans)"],
      },
    },
  },
  plugins: [],
};
