const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: {
    main: './src/index',
    styles: ['./src/theme/dark.less', './src/theme/light.less'],
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build',
    chunkFilename: '[id].[chunkhash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ['file-loader?name=[name].[ext]'],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),

    new webpack.ProvidePlugin({
      html2canvas: 'html2canvas',
    }),

    new MiniCssExtractPlugin({ filename: 'styles/[name].css' }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        light: {
          test: (m) => {
            return /light.less/.test(m._identifier);
          },
          name: 'light',
          chunks: 'initial',
        },
        dark: {
          test: (m) => {
            return /dark.less/.test(m._identifier);
          },
          name: 'dark',
          chunks: 'initial',
        },
      },
    },
  },
};
