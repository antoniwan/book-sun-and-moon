/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#2a221c",
        paper: "#f3ead8",
        cream: "#f3ead8",
        ember: "#c4452f",
        blush: "#e8b4a0",
        sun: "#d4923a",
        dusk: "#1c2740",
        moonlight: "#efe6d6",
      },
      fontFamily: {
        display: ['"Fraunces"', "Iowan Old Style", "Palatino", "serif"],
        story: ['"Source Serif 4"', "Iowan Old Style", "Palatino", "serif"],
      },
      boxShadow: {
        page: "0 18px 50px rgba(42, 34, 28, 0.22)",
        glow: "0 0 40px rgba(212, 146, 58, 0.35)",
      },
      keyframes: {
        kenburns: {
          from: { transform: "scale(1)" },
          to: { transform: "scale(1.08)" },
        },
        fadeSlide: {
          from: { opacity: "0", transform: "translateX(var(--page-delta, 18px))" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "1" },
        },
        rise: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        kenburns: "kenburns 22s ease-out forwards",
        pageIn: "fadeSlide 480ms ease both",
        twinkle: "twinkle 3.6s ease-in-out infinite",
        rise: "rise 700ms ease both",
      },
    },
  },
  plugins: [],
};
