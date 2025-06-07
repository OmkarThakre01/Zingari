import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(async () => {
  const scrollbarHide = await import('tailwind-scrollbar-hide');

  return {
    plugins: [
      tailwindcss(),
      react(),
      scrollbarHide.default(), // .default is needed for CommonJS modules
    ],
  };
});
