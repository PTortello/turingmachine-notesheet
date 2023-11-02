import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/turingmachine-notesheet/",
  plugins: [react()],
  resolve: {
    alias: {
      assets: "/src/assets",
      components: "/src/components",
      constants: "/src/constants",
      contexts: "/src/contexts",
      hooks: "/src/hooks",
      i18n: "/src/i18n",
      interfaces: "/src/interfaces",
      utils: "/src/utils",
    },
  },
});
