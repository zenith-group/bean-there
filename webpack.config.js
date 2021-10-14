var path = require("path");
//simport css from 'file.css';

module.exports = {
  entry: path.join(__dirname, "client/src/index.js"),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "client/public")
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
      },
      {
        test: /\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      }
    ],
  },
};