const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    transpileDependencies: true,
    // lintOnSave: false,
    outputDir: 'dist',//压缩文件名字
    publicPath : './',
})
// less定义全局颜色变量
const vueConfig = {
    // 加上以下的配置
  chainWebpack: (config) => {
    const oneOfsMap = config.module.rule("less").oneOfs.store;
    oneOfsMap.forEach(item => {
      item
        .use("style-resources-loader")
        .loader("style-resources-loader")
        .options({
          // or an array : ["./path/to/vars.less", "./path/to/mixins.less"] 这里的路径不能使用@，否则会报错
          patterns: "./src/assets/css/public.less"
        })
        .end()
    })
  }
  // 其他配置...
}
module.exports = vueConfig

