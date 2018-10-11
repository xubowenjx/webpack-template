const path = require('path')
module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: '/node_modules/'
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  resolveLoader: {
    // 去哪些项目下寻找Loader，有先后顺序之分
    modules: ['node_modules'] //'E://git' 测试本地loader & npm link
  }
}
