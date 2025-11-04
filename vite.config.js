import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [".csb.app", ".codesandbox.io"],
    host: true,
    port: 5173,
  },
});
