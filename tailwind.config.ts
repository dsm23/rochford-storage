import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {},
  },
  plugins: [typography()],
} satisfies Config;

export default config;
