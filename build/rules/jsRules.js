const tsImportPluginFactory = require('ts-import-plugin');

const { resolve } = require('../utils');

module.exports = [
  {
    test: /\.(js|jsx)$/,
    use: 'babel-loader',
  },
  {
    // 解析什么类型文件
    test: /\.ts(x?)$/,
    // 使用什么规则解析类型文件
    use: [
      {
        loader: 'awesome-typescript-loader',
        options: {
          useCache: true,
          cacheDirectory: resolve('.cache-loader'), // 构建缓存:  每一次的构建都会对代码进行重新转换。 而构建缓存就是将构建的公用代码缓存在磁盘上，这样做的效果就是第一次构建的时间花销会比不用缓存的构建大，但是在之后每次构建的时间花销都会大大减少。
          babelOptions: {
            // 不需要babelrc 文件
            babelrc: false,
            plugins: [
              'react-hot-loader/babel'
            ]
          },
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: 'antd',
                libraryDirectory: 'lib',
                // true 使用组件的less文件
                // 填写css的话使用css文件, 但同时不能定制主题
                style: true
              })
            ]
          })
        }
      }
    ]
  },
]
