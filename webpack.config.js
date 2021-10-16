var path = require('path');
//simport css from 'file.css';

module.exports = {
<<<<<<< HEAD
  entry: path.join(__dirname, 'client/src/index.jsx'),
=======
  entry: path.join(__dirname, "client/src/index.jsx"),
>>>>>>> 1ede857cfe52212d8b2bc6d606aaf35e9556e2ba
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'client/public'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
<<<<<<< HEAD
  resolve: {
    extensions: ['.js', '.jsx'],
  },
=======
>>>>>>> 1ede857cfe52212d8b2bc6d606aaf35e9556e2ba
};
