import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from "autoprefixer";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import legacy from '@vitejs/plugin-legacy'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    legacy({
      targets: ['defaults', 'not IE 11'],
	  // additionalLegacyPolyfills: ['regenerator-runtime/runtime'] // IE 11 所需
    })
  ],
  css: {
    postcss: {
      plugins: [autoprefixer({
        overrideBrowserslist: [
          'Android 4.1',
          'iOS 7.1',
          'Chrome > 31',
          'ff > 31',
          'ie >= 8',
          '> 1%',
        ],
        grid: true,
      })]
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:2233',
        secure: false,
        changeOrigin: true,
      }
    }
  }
})
