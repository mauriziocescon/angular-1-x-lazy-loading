const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const commonConfig = require('./base.js');

module.exports = (env) => {
  return webpackMerge(commonConfig(env), {

    mode: 'production',

    plugins: [

      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production'),
        },
      }),

      // bundle analyzer
      new BundleAnalyzerPlugin({
        analyzerMode: 'disabled',
        generateStatsFile: true,
      }),
    ],

    module: {

      rules: [

        // images loader
        {
          test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
          use: [
            {loader: 'file-loader', options: {name: '[name].[hash].[ext]'}},
          ],
        },
      ],
    },

    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: 'lazy.js',
      library: 'Lazy',
      libraryTarget: 'umd',
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
      'angular': 'angular',
    },
  });
};
