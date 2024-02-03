const {
  override,
  addWebpackAlias,
  adjustStyleLoaders,
  addLessLoader,
  overrideDevServer,
  watchAll,
  addWebpackPlugin,
} = require("customize-cra");
const path = require("path");
const webpack = require("webpack");

const TerserWebpackPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.REACT_APP_ENV === "production";

const devServerConfig = () => (config) => {
  return {
    ...config,
    proxy: {
      "/api": {
        target: "",
        changeOrigin: true,
        secure: false,
      },
    },
  };
};

const setOptimization = () => (config) => {
  config.optimization.minimize = true;
  return { ...config };
};

module.exports = {
  webpack: override(
    addLessLoader(),

    adjustStyleLoaders(({ use: [, , postcss] }) => {
      const postcssOptions = postcss.options;
      postcss.options = { postcssOptions };
    }),

    addWebpackAlias({
      "@": path.resolve(__dirname, "src"),
    }),

    addWebpackPlugin(
      new MiniCssExtractPlugin({
        filename: "static/css/[name]-[contenthash:8].css",
        chunkFilename: "static/css/[name].[contenthash:8].chunk.css",
      })
    ),

    addWebpackPlugin(
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      })
    ),

    isProduction &&
      addWebpackPlugin(
        new TerserWebpackPlugin({
          terserOptions: {
            mangle: true,
            compress: {
              drop_console: true,
              drop_debugger: true,
              arguments: true,
              dead_code: true,
            },
            toplevel: true,
            keep_classnames: true,
            keep_fnames: true,
          },
        })
      ),

    isProduction && setOptimization()
  ),
  devServer: overrideDevServer(
    // dev server plugin
    watchAll(),
    devServerConfig()
  ),
};
