const webpack = require('webpack');
const path = require('path');

const external = (module) => ({
  commonjs2: module,
  commonjs: module,
  amd: module,
});

module.exports = (env) => new Promise(resolve => {
  const mobxDispatcher = {
    devtool: 'source-map',
    
    entry: () => './src/index.ts',
    
    externals: {
      'react': external('react'),
      'mobx-react': external('mobx-react'),
    },
    
    output: {
      filename: env.minify === 'true' ? 'lib/mobx-dispatcher.min.js' : 'lib/mobx-dispatcher.js',
      libraryTarget: 'commonjs',
    },
    
    resolve: {
      extensions: ['.ts', '.tsx'],
    },
    
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: [
            {loader: 'ts-loader'},
          ],
          include: file => {
            return file.indexOf(path.resolve(__dirname, 'src')) === 0;
          },
        },
      ],
    },
    
    plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      }),
      new webpack.optimize.ModuleConcatenationPlugin(),
    ],
  };
  
  if (env.minify === 'true') {
    mobxDispatcher.plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      }),
      new webpack.optimize.UglifyJsPlugin({
        output: {
          comments: false,
        },
        compress: {
          warnings: false,
          screw_ie8: true,
        },
      }),
    );
  }
  
  resolve([mobxDispatcher]);
});