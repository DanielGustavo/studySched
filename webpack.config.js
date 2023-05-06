const sassRule = {
  test: /\.(sass|scss)$/,
  use: [
    'vue-style-loader',
    'css-loader',
    {
      loader: 'sass-loader',
      options: {
        indentedSyntax: true,
        sassOptions: {
          indentedSyntax: true,
        },
      },
    },
  ],
};

module.exports = {
  module: {
    rules: [sassRule],
  },
};
