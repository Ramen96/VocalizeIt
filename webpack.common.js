const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

function getHtmlPlugins(chunks) {
  return chunks.map(chunk => new HtmlPlugin({
    title: 'VocalizeIt',
    filename: `${chunk}.html`,
    chunks: [chunk]
  }));
}

module.exports = {
  entry: {
    popup: path.resolve('/src/popup/popup.tsx'),
    options: path.resolve('src/options/options.tsx'),
    background: path.resolve('src/background/background.ts'),
    contentScript: path.resolve('src/contentScript/contentScript.ts')
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
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
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
    ...getHtmlPlugins(['popup', 'options'])
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  }
}

