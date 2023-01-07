import { Configuration } from "webpack";
import nodeExternals from "webpack-node-externals";
import path from "path";
console.log(path.join(__dirname, "../src/ssr.tsx"));
export default {
  mode: "production",
  target: "node",
  entry: path.join(__dirname, "../src/ssr.tsx"),
  output: {
    filename: "root-ssr.js",
    path: path.resolve(__dirname, "../build/ssr"),
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [{ test: /\.tsx$/, use: "ts-loader", exclude: /node_modules/ }],
  },
  resolve: {
    extensions: [".tsx"],
  },
  externals: [nodeExternals()],
} as Configuration;
