const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  configureWebpack: {
    devtool: "source-map"
  },
  // configureWebpack:{
  //   module: {
  //     loaders: [
  //       {
  //         test: /\.vue$/,
  //         loader: 'vue'
  //       }, 
  //       {
  //           test: /\.s[a|c]ss$/,
  //           loader: 'style!css!sass'
  //       }
  //     ]
  //   },
  //   vue: {
  //     loaders: {
  //       scss: 'style!css!sass'
  //     }
  //   }
  
  // },
  transpileDependencies: true
})
