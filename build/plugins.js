const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolveAssetsRootDir } = require('./utils');

module.exports = [
  // 生成一个 html5 页面  其中包括使用 script 标签的 body 中的所有 webpack 包
  new HtmlWebpackPlugin({
    template: 'build/tpl/index.html',
    minify: {
      /**
       * @description
       * 删除注释、空格、尽可能删除属性引号
       * 
       * inject: true 默认为 true  他会将js资源注入到<body>标签的底部，如果要注入到头部填写head即可
       */
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true,
    }
  }),
  new MiniCssExtractPlugin({ // 进行css代码的分离
    filename: resolveAssetsRootDir('css/[name].css'),
  })
]
