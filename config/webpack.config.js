entry: {
  app: 'src/app.ts'
}
output: {
  filename: 'dist/app.js'
}
loaders: [
  {
    test: /\.ts$/
    loaders: 'ts'
  },
  {
    test: /\.css$/
    loaders: 'style!css'
  }
]
plugins: [
  new webpack.optimize.UglifyJsPlugin()
]