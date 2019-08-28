/**
 * qiniu upload
 */

const qiniu = require("qiniu");

function upload(file, config) {
  let { basePath, prefix, filePath } = file;
  let { accessKey, secretKey, scope, expires = 7200 } = config;

  var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

  var options = {
    scope,
    expires
  };
  var putPolicy = new qiniu.rs.PutPolicy(options);
  var uploadToken = putPolicy.uploadToken(mac);

  var localFile = filePath;

  var config = new qiniu.conf.Config();
  config.zone = qiniu.zone.Zone_z0;

  var formUploader = new qiniu.form_up.FormUploader(config);
  var putExtra = new qiniu.form_up.PutExtra();
  const name = filePath.split(basePath)[1];

  if (["/.DS_Store"].includes(name)) return;

  let key = prefix + name;
  // fix windows path bug
  key = key.replace(/\\/g, "/");
  // upload
  formUploader.putFile(uploadToken, key, localFile, putExtra, function(
    respErr,
    respBody,
    respInfo
  ) {
    if (respErr) {
      throw respErr;
    }
    if (respInfo.statusCode == 200) {
      console.log(respBody);
    } else {
      console.log(respInfo.statusCode);
      console.log(respBody);
    }
  });
}

module.exports = { upload };
