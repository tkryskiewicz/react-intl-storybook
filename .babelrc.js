module.exports = {
  plugins: [
    [
      "react-intl",
      {
        messagesDir: "./dist/messages/",
      },
    ],
  ],
  presets: [
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
};
