// vite.config.js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue2';


export default defineConfig({
    plugins: [
        vue(),
        laravel({ input: ['resources/ts/app/main.ts'], refresh: ['resources/**'],}
    ),
    ],
    define: {
        'process.env': {}
    }
});
