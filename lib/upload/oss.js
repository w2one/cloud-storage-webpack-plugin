/**
 * ali oss upload
 */
const oss = require("ali-oss");

async function upload(file, config) {
  let { basePath, prefix, filePath } = file;
  let { accessKeyId, accessKeySecret, bucket, region } = config;

  const name = filePath.split(basePath)[1];

  if (["/.DS_Store"].includes(name)) return;
  const key = prefix + name;

  const client = oss({
    accessKeyId,
    accessKeySecret,
    bucket,
    region
  });

  try {
    let result = await client.put(key, filePath);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

module.exports = { upload };
