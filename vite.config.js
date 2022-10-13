import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const isVue3 = true;

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: isVue3
      ? {
          vue: "@vue/compat",
        }
      : {},
  },
  plugins: [vue()],
});
