const path = require('path');

module.exports = {
  entry: './src/wp.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};