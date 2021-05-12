// vue.config.js
const defaultSettings = require('./src/config/settings.js')

process.env.VUE_APP_TITLE = defaultSettings.title || 'mobile-vant-template'
const port = process.env.port || process.env.npm_config_port || 9528 // dev port

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    // before: require('./mock/mock-server.js')
  },
  configureWebpack: {
    // 关闭 webpack 的性能提示
    // performance: {
    //   hints:false
    // }

    // //或者
    // 警告 webpack 的性能提示i
    performance: {
      hints: 'warning',
      // 入口起点的最大体积
      maxEntrypointSize: 50000000,
      // 生成文件的最大体积
      maxAssetSize: 30000000,
      // 只给出 js 文件的性能提示
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith('.js')
      },
    },
  },
}
