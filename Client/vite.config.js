import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
	plugins: [react(), tailwindcss()],
	build: {
		outDir: "../Server/public", // ← relative to the config file
		emptyOutDir: true, // ← clean it each build
	},
});
