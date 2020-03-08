# [cloud-storage-webpack-plugin](https://github.com/w2one/cloud-storage-webpack-plugin) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/w2one/cloud-storage-webpack-plugin/blob/master/LICENSE) [![npm version](https://img.shields.io/badge/cloud--storage--webpack--plugin-0.0.5-blue)](https://www.npmjs.com/package/cloud-storage-webpack-plugin)

supports

- cos
- oss
- qiniu

## Install

```
npm install cloud-storage-webpack-plugin -D

yarn add cloud-storage-webpack-plugin -D
```

## Usage

### cos

```
const CloudStorageWebpackPlugin = require("cloud-storage-webpack-plugin");

module.exports = {
  plugins: [
    new CloudStorageWebpackPlugin({
      prefix: "cloud dir",
      cos: {
        SecretId: "your secretId",
        SecretKey: "your secretKey",
        Bucket: "your bucket",
        Region: "your regin"
      }
  ]
}
```

### oss

```
const CloudStorageWebpackPlugin = require("cloud-storage-webpack-plugin");

module.exports = {
  plugins: [
    new CloudStorageWebpackPlugin({
      prefix: "cloud dir",
       oss:{
        accessKeyId: "your accessKeyId",
        accessKeySecret: "your accessKeySecret",
        bucket: "your bucket",
        region: "your regin"
      },
  ]
}
```

### qiniu

```
const CloudStorageWebpackPlugin = require("cloud-storage-webpack-plugin");

module.exports = {
  plugins: [
    new CloudStorageWebpackPlugin({
      prefix: "cloud dir",
       qiniu:{
        accessKey:"your accessKey",
        secretKey:"your secretKey",
        scope:"your scope"
      }
  ]
}
```
