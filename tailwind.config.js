/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        ink: "#3d2c29",
        cream: "#fff8f0",
        blush: "#ffd6dc",
        sun: "#e09f3e",
        dusk: "#1b1b3a",
        moonlight: "#efeaf8",
      },
      fontFamily: {
        display: ['"Satisfy"', "cursive"],
        story: ['"Quicksand"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        page: "0 18px 50px rgba(61, 44, 41, 0.22)",
        glow: "0 0 40px rgba(224, 159, 62, 0.35)",
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
