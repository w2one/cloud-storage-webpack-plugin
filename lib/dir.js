/**
 * list dir files
 */

const fs = require("fs");
const path = require("path");

function dir(basePath) {
  const list = [];

  function _dir(basePath, filePath) {
    filePath = filePath ? filePath : basePath;

    const files = fs.readdirSync(filePath);
    files.forEach(filename => {
      const filedir = path.join(filePath, filename);
      const stats = fs.statSync(filedir, function(err, stats) {
        if (err) {
          console.warn("fail");
          return;
        }
      });

      var isFile = stats.isFile();
      var isDir = stats.isDirectory();
      if (isFile) {
        list.push(filedir);
        console.log(filedir);
      }
      if (isDir) {
        _dir(basePath, filedir);
      }
    });
  }

  _dir(basePath);

  return list;
}

module.exports = dir;
