/**
 * cos upload
 */
var COS = require("cos-nodejs-sdk-v5");
const fs = require("fs");

/**
 * upload
 * @param {file} file
 * @param {oss config} config
 */
function upload(file, config) {
  let { basePath, prefix, filePath } = file;
  let { Bucket, Region, SecretId, SecretKey } = config;

  const name = filePath.split(basePath)[1];

  // filter
  if (["/.DS_Store"].includes(name)) return;
  let key = prefix + name;
  // fix windows path bug
  key = key.replace(/\\/g, "/");

  var cos = new COS({
    SecretId,
    SecretKey
  });

  cos.putObject(
    {
      Bucket,
      Region,
      Key: key,
      Body: fs.createReadStream(filePath)
    },
    function(err, data) {
      console.log(err || data);
    }
  );
}

/**
 * delete multiple files
 */
function _deleteMultiple(list) {
  cos.deleteMultipleObject(
    {
      Bucket,
      Region,
      Objects: list
    },
    function(err, data) {
      console.log(err || data);
    }
  );
}

/**
 * list dir all file
 */
async function _list(Prefix) {
  return new Promise((resolve, reject) => {
    cos.getBucket(
      {
        Bucket,
        Region,
        Prefix
      },
      function(err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data.Contents);
        }
      }
    );
  });
}

async function fnDelete(prefix) {
  const data = await _list(prefix);
  const keys = data.reduce((acc, item) => {
    acc.push({ Key: item.Key });
    return acc;
  }, []);
  _deleteMultiple(keys);
}

module.exports = { upload, fnDelete };
