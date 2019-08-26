# cloud-storage-webpack-plugin

cloud storage webpack plugin

supports

- cos 腾讯
- oss 阿里
- qiniu 七牛


## Install

~~~
npm install cloud-storage-webpack-plugin -D

yarn add cloud-storage-webpack-plugin -D
~~~


## Usage


### cos 腾讯

~~~
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
~~~


### oss 阿里

~~~
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
~~~

### qiniu 七牛

~~~
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
~~~

