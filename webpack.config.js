const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

module.exports = {
  mode: "development",
  devtool: 'cheap-module-source-map',
  entry: {
    popup: path.resolve('/src/popup/popup.tsx'),
  },
  module: {
    rules: [
      {
        use: "ts-loader",
        test: /\.tsx$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader', {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              idnet: 'postcss',
              plugins: [tailwindcss, autoprefixer]
            }
          }
        }],
        test: /\.css$/i,
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { 
          from: path.resolve('src/static'),
          to: path.resolve('dist') 
        },
      ]
    }),
    new HtmlPlugin({
      title: 'VocalizeIt',
      filename: 'popup.html',
      chunks: ['popup']
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}
