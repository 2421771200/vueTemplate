const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    transpileDependencies: true,
    // lintOnSave: false,
    outputDir: 'dist',//压缩文件名字
    publicPath : './',
})
