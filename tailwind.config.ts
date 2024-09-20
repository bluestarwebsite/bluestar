import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      keyframes: {
        twinkle: {
          "0%": { opacity: "1" }, // Dimmed state
          "1%": { opacity: "0.3" }, // Brightest state
          "2%, 100%": { opacity: "1" }, // Back to dim, pause here
        },
      },
      animation: {
        twinkle: "twinkle 20s infinite ease-in-out", // Animation definition
      },
    },
  },
  plugins: [],
} satisfies Config;
