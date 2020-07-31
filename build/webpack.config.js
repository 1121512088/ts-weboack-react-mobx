const TsconfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin');

const plugins = require('./plugins');
const { resolve } = require('./utils');
const jsRules = require('./rules/jsRules');
const styleRules = require('./rules/styleRules');
const fileRules = require('./rules/fileRules');

module.exports = {
  entry: {
    app: resolve('src/index.tsx'),
  },
  output: {
    path: resolve('dist'),
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      ...jsRules,
      ...styleRules,
      ...fileRules,
    ]
  },
  // 引入文件就不需要带扩展名
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx'],
    alias: { // 路径优化  tsconfig.json 需要配置  paths
      '@': resolve('src'),
    },
    plugins: [
      new TsconfigPathsWebpackPlugin({ // tsconfig中对路径的设置映射到webpack配置中
        // 配置文件引入tsconfig.json
        configFile: resolve('tsconfig.json'),
      })
    ]
  },
  plugins: [
    ...plugins
  ],
}
