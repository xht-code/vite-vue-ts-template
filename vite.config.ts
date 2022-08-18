import { defineConfig, PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import {
  VantResolver,
  VueUseComponentsResolver
} from 'unplugin-vue-components/resolvers'
import PostCssPxToRem from 'postcss-pxtorem'
import WindiCSS from 'vite-plugin-windicss'
import visualizer from 'rollup-plugin-visualizer'
import { resolve } from 'path'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir) + '/'
}

const vitePlugins: PluginOption[] = [
  vue(),
  vueJsx(),
  WindiCSS({
    config: {
      attributify: { prefix: 'w:' },
      extract: {
        include: ['**/*.{vue,html,jsx,tsx,ts}'],
        exclude: ['node_modules', '.git', 'dist', 'windi.config.{ts,js}']
      }
    }
  }),
  Components({
    dirs: ['src/components'],
    extensions: ['vue', 'tsx'],
    deep: true,
    dts: 'types/components.d.ts',
    directoryAsNamespace: true,
    resolvers: [VantResolver(), VueUseComponentsResolver()]
  }),
  Pages({
    pagesDir: [{ dir: 'src/views', baseRoute: '' }],
    extensions: ['vue'],
    exclude: ['**/components/*.vue'],
    importMode: 'async',
    nuxtStyle: true
  })
]

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === 'analyze') {
    vitePlugins.push(
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true
      })
    )
  }

  return {
    base: './',
    plugins: vitePlugins,
    resolve: {
      alias: [
        {
          find: /^@\//,
          replacement: pathResolve('src')
        },
        {
          find: /^#\//,
          replacement: pathResolve('types')
        }
      ]
    },
    css: {
      postcss: {
        plugins: [
          PostCssPxToRem({
            rootValue: ({ file }) => (file.includes('vant') ? 37.5 : 75),
            propList: ['*']
          })
        ]
      }
    }
  }
})
