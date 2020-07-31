const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolveAssetsRootDir } = require('./utils');

module.exports = [
  // 生成一个 html5 页面  其中包括使用 script 标签的 body 中的所有 webpack 包
  new HtmlWebpackPlugin({
    template: 'build/tpl/index.html'
  }),
  new MiniCssExtractPlugin({ // 进行css代码的分离
    filename: resolveAssetsRootDir('css/[name].css'),
  })
]
