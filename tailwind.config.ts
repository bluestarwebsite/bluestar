import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        "brand-bg": "#FFF",
        "brand-blue": "#035DB7",
      },
    },
  },
  plugins: [],
} satisfies Config;
