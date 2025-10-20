import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginSvgr from "vite-plugin-svgr";

export default defineConfig(({ command }) => ({
    plugins: [react(), vitePluginSvgr()],
    base: command === 'build' ? '/product-list-react/' : '/',
}));
