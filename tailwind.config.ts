import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily:{
        sans: ["Inconsolata", ...defaultTheme.fontFamily.sans],
      }
    }
  },

  plugins: []
} as Config;
