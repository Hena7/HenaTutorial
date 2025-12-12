/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}", // or "./pages/**/*.{ts,tsx}" if using pages
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neon-cyan": "#00FFD1",
        "neon-magenta": "#FF2EC4",
        "glass-900": "rgba(10,12,16,0.55)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
