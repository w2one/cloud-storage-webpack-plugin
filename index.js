/**
 * cloud storage webpack plugin
 */

const dir = require("./lib/dir");
const { COS, OSS, QINIU } = require("./lib/upload");
class CloudStorageWebpackPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.done.tap("assets webpack Plugin", stats => {
      const basePath = stats.compilation.outputOptions.path;

      const files = dir(basePath);

      const { prefix, cos, oss, qiniu } = this.options;

      if (cos) {
        //cos
        files.forEach(filePath =>
          COS.upload({ filePath, prefix, basePath }, cos)
        );
      } else if (oss) {
        //oss
        files.forEach(filePath =>
          OSS.upload({ filePath, prefix, basePath }, oss)
        );
      } else if (qiniu) {
        //qiniu
        files.forEach(filePath =>
          QINIU.upload({ filePath, prefix, basePath }, qiniu)
        );
      }
    });
  }
}

module.exports = CloudStorageWebpackPlugin;
