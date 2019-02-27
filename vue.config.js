// webpack 配置 node.js 文件 

const path = require('path')
module.exports = {
  //1. 给路径起别名
  // chainWebpack: callback(config)
  chainWebpack: config => {
    // config.resolve.alias.set(pathName,绝对路径)
    config.resolve.alias 
      .set('components',path.resolve(__dirname,'./src/components'))
      .set('pages',path.resolve(__dirname,'./src/pages'))
      .set('styles',path.resolve(__dirname,'./src/assets/styles'))
      .set('utils',path.resolve(__dirname,'./src/utils'))
  },
  // 反向代理
  // 短暂开启后端服务器环境
  devServer:{
    proxy:{
      '/api':{
        target:'https://webservice.juanpi.com',
        // 用http：//localhost:8080 的源替代上面的源
        changeOrigin:true
      }
    }
  }
}