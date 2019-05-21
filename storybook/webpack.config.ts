import * as Webpack from "webpack";

export default async ({ config }: { config: Webpack.Configuration }) => {
  config.module!.rules.push(
    {
      test: /\.tsx$/,
      enforce: "pre",
      loaders: [
        {
          loader: require.resolve('@storybook/addon-storysource/loader'),
          options: {
            parser: "typescript",
          },
        },
      ],
    },
    {
      test: /\.tsx$/,
      use: "awesome-typescript-loader",
    },
  );

  config.resolve!.extensions!.push(".tsx");

  return config;
}
