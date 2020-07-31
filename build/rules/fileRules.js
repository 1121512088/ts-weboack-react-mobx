const { resolve } = require('../utils');

module.exports = [
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    loader: '@svgr/webpack',
    include: resolve('src'),
  }
]

