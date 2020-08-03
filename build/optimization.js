const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin'); // 在uglifyjs-webpack-plugin这个插件中，如果是2.x版本的话是不支持es6规范的，所以建议安装1.x版本
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin'); // css 压缩

// optimization进行第三方库代码分离
module.exports = {
  // 缓存 webpack 固定生成代码块，该代码块通常不变，用于维系各个模块之间
  runtimeChunk: {
    name: 'manifest',
  },
  // 指定需要进行分块的代码，和分块后的文件
  splitChunks: {
    cacheGroups: {
      default: false,
      commons: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendor',
        chunks: 'all',
      }
    }
  },
  minimizer: [
    new UglifyjsWebpackPlugin({
      // 使用文件缓存，当js 文件没有变化时候就利用缓存
      cache: true,
      // 采用多线程来加速压缩
      parallel: true,
      // 是否配置 source map
      sourceMap: true,
    }),
    new OptimizeCssAssetsWebpackPlugin({
      // cssnano 用于优化css格式表,使得构建出来的 css样式表文件变小
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        reduceIdents: false,
        autoprefixer: false,
      }
    })
  ],
}
