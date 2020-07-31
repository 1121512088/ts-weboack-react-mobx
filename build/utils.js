const path = require('path');

exports.resolve = dir => {
  return path.join(__dirname, './../', dir);
}

exports.resolveAssetsRootDir = dir => path.join(dir);
