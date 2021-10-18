var path = require('path');
const { SourceMapDevToolPlugin } = require('webpack');
//simport css from 'file.css';

module.exports = {
  entry: ['@babel/polyfill', path.join(__dirname, 'client/src/index.jsx')],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'client/public'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/transform-runtime'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
