module.exports = {
  entry: [
    './src/App.js'
  ],
  output: {
    path: __dirname,
    filename: "dist/bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: babel
    }]
  }
};