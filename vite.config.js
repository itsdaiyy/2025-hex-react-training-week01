import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/2025-hex-react-training-week01/",
  plugins: [react()],
});
