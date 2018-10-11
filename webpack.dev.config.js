var merge = require('webpack-merge')
const path = require('path')
var baseconfig = require('./webpack.config')
module.exports = merge(baseconfig, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, ''),
    port: 3000
  }
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     filename: 'index.html'
  //   })
  // ]
})
