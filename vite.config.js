import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import viteSvgToWebfont from 'vite-svg-2-webfont'
import {viteMockServe} from 'vite-plugin-mock'
import { codeInspectorPlugin } from 'code-inspector-plugin'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        reportCompressedSize: false,
        assetsDir: './assets',
        chunkSizeWarningLimit: 500,
        mode: 'production',
        minify: 'terser',
        sourcemap: false,
        cssCodeSplit: true, // 如果设置为false，整个项目中的所有 CSS 将被提取到一个 CSS 文件中
        terserOptions: {
            compress: {
                // drop_console: isProduction,  //打包时删除console
                // drop_debugger: isProduction, //打包时删除 debugger
                // pure_funcs: ['console.log'],
            },
            output: {
                // 去掉注释内容
                // comments: isProduction,
            },
        },
        brotliSize: false,
        target: 'es2015'
    },
    plugins: [
        codeInspectorPlugin({
            bundler: 'vite',
        }),
        viteSvgToWebfont({
            context: resolve(__dirname, 'src', 'svgs'),
        }),
        vue(),
        viteMockServe({
            mockPath: 'mock',
            localEnabled: true, // 是否应用于本地
            prodEnabled: false, // 是否应用于生产环境
            enable: true,
            watchFiles: true,
        }),
    ],
    server: {
        port: 8080,
        host: true,
        hmr: true,
        // proxy: {
        //     '/api': {
        //         target: 'https://127.0.0.1:8080',   //实际请求地址
        //         changeOrigin: true,
        //         rewrite: (path) => path.replace(/^\/api/, '/api')
        //     },
        // }
    },
})
