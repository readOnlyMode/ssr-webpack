import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

console.log(process.env.NODE_ENV);
export default {
  devServer: {
    static: {
      directory: path.join(__dirname, "../dist"),
    },
    compress: true,
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
  devtool: process.env.NODE_ENV === "development" ? "inline-source-map" : false,
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  mode: process.env.NODE_ENV === "development" ? "development" : "production",
  target: "web",
  entry:
    process.env.NODE_ENV === "production"
      ? path.join(__dirname, "../src/index.ssr.tsx")
      : path.join(__dirname, "../src/index.tsx"),
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../build/client"),
    clean: true,
  },
  module: {
    rules: [{ test: /\.tsx$/, use: "ts-loader", exclude: /node_modules/ }],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./index.html", minify: false })],
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,

        vendor: {
          chunks: "all", // both : consider sync + async chunks for evaluation
          name: "vendor", // имя чанк-файла
          test: /node_modules/, // test regular expression
        },
      },
    },
  },
} as Configuration;
