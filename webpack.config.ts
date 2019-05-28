import * as Webpack from "webpack";

const config: Webpack.Configuration = {
  entry: "./src/strings/usage.story.tsx",
  mode: "none",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [
      ".tsx",
      ".ts",
      ".js",
    ],
  },
};

export default config;
