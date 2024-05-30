export default {
  content: ["./components/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        popover: {
          DEFAULT: "hsl(var(--popover))",
        },
      },
      fontFamily: {
        comicneue: "Comic Neue, cursive",
        lato: "Lato, sans-serif",
        inter: "Inter, sans-serif",
      },
      backgroundImage: {
        initial: "url('assets/initial-background.jpg')",
        dashboard: "url('assets/dashboard-background.jpg')",
      },
      boxShadow: {
        album: "0px 3px 19px 0px #BDBDBD3B",
      },
      animation: {
        "loop-scroll": "loop-scroll 100s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [import("tailwindcss-animate")],
};