var merge = require('webpack-merge')
var baseconfig = require('./webpack.config')
module.exports = merge(baseconfig, {
  mode: 'production',
  devtool: '#source-map'
})
