import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

const isStorybook = process.argv[1]?.includes("storybook");

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    !process.env.VITEST && !isStorybook ? reactRouter() : react(),
    tailwindcss(),
  ],
});
