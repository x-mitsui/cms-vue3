const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  // CLI提供的属性
  outputDir: './build',
  publicPath: './',
  // 和webpack属性完全一致，最后会进行合并，默认@对应src目录
  configureWebpack: {
    devtool: 'source-map',
    resolve: {
      alias: {
        components: '@/components',
        utils: '@/utils'
      }
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ],
    devServer: {
      proxy: {
        '^/api': {
          target: 'http://152.136.185.210:5000',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }
  // 第二种方式
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     views: '@/views'
  //   }
  // }
}
