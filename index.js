/**
 * cloud storage webpack plugin
 */

const { upload } = require("./upload");
const dir = require("./dir");

class CloudStorageWebpackPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.done.tap("assets webpack Plugin", stats => {
      const basePath = stats.compilation.outputOptions.path;
      const files = dir(basePath);

      // cos
      const { cos: config, prefix } = this.options;
      files.forEach(filePath => upload({ filePath, prefix, basePath }, config));
    });
  }
}

module.exports = CloudStorageWebpackPlugin;
