const path = require('path');
const webpack = require('webpack');
const PrettierPlugin = require('prettier-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const getPackageJson = require('./scripts/getPackageJson');

const { version, name, license, repository, author } = getPackageJson(
  'version',
  'name',
  'license',
  'repository',
  'author'
);

const banner = `
  ${name} v${version}
  ${repository.url}

  Copyright (c) ${author.replace(/ *<[^)]*> */g, ' ')} 그리고 프로젝트 기여자.

  이 소스코드는 루트 디렉터리에 있는 'LICENSE' 파일에 명시된 '${license}' 라이센스에 따라 라이센스가 부여됩니다.
`;

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/lib/index.js',
  output: {
    filename: 'mirine.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'mirine',
      type: 'umd',
    },
    clean: true,
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({ extractComments: false })],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [new webpack.BannerPlugin(banner)],
};
