module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "./dist/bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  },
  devServer: {
      publicPath: "/",
      contentBase: "./public",
      hot: true,
      inline: true
  }
};