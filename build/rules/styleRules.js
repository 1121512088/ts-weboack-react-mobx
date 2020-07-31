const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolve } = require('../utils');
const theme = require('../../theme');

module.exports = [
  {
    test: /\.scss$/,
    include: [resolve('src')],
    // 首先sass-loader将sass代码编译为css(默认使用node-sass)，然后css-loader将编译出来的代码再次编译成为符合CommonJS的代码，最后style-loader将第二步编译出来的代码转为js代码
    // webpack进行loader编译的顺序是从下到上的  
    use: [
      // 'style-loader',
      MiniCssExtractPlugin.loader, 
      'css-loader',
      'sass-loader',
    ],
  },
  {
    test: /\.less$/,
    // include: [resolve('src')], // 只针对 src文件下 less编译  使用到antd包 内含less文件 则注释
    use: [
      // 'style-loader',
      MiniCssExtractPlugin.loader, // style-loader用于将css-loader编译出来的代码转为js代码并写入js文件中，所以在这里，我们需要用mini-css-extract-plugin中的loader去替换掉style-loader，让它写入单独的css文件而不是js文件中
      {
        loader: 'cache-loader', // 构建缓存 需要下载 cache-loader
        options: {
          cacheDirectory: resolve('.cache-loader') // 构建缓存
        }
      },
      'css-loader',
      // {
      //   loader: 'typings-for-css-modules-loader', // 替代 css-loader 切可以使用 变量引入less方式 
      //   options: {
      //     // 启用/禁用 CSS 模块
      //     modules: true,
      //     // 类名导出 主要: import styles from '...'
      //     namedExport: true,
      //     // 支持驼峰
      //     camelCase: true,
      //     // 是否使用less
      //     less: true,
      //   }
      // },
      {
        loader: 'less-loader',
        options: {
          // TODO: have issues  includePaths进行路径优化 @import '../../styles'  perf: @import 'var.less'  直接引入 styles 下面的文件
          // lessOptions: {
          //   includePaths: [path.join(__dirname, './../', 'src/styles')]
          // }

          lessOptions: {
            // 禁止内联 js 代码， 这个功能用于禁用在样式表里面写js代码
            javascriptEnabled: true,
            // 根据 antd 官方修改主题
            modifyVars: theme,
          }
        }
      }
    ],
  }
]
