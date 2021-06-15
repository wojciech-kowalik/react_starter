import * as webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import * as path from 'path'
import { dependencies as deps } from './package.json'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin'

// @ts-ignore
const config: (env: Record<string, boolean>) => webpack.Configuration = (
  env
) => {
  const config: webpack.Configuration = {}
  const plugins = []

  if (env.development) {
    plugins.push(
      new HtmlWebpackPlugin({
        title: 'React starter',
        template: './public/index.html',
      })
    )
    config.externals = ['i18n']

    config.devServer = {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      port: 3002,
    }
    config.output = {
      publicPath: '/',
      path: path.resolve(__dirname, 'dist'),
      chunkFilename: '[name].[contenthash].js',
    }
  }

  return {
    ...config,
    entry: env.prod ? './src/app.tsx' : './src/index.tsx',
    mode: env.prod ? 'production' : 'development',
    target: 'web',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader',
          ],
        },
      ],
    },
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
      extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [...plugins, new CleanWebpackPlugin()],
  }
}

export default config
