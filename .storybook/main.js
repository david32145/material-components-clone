const path = require("path")

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: __dirname
      }
    ]
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: path.resolve(__dirname, '..'),
      use: [
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          options: {
            tsconfigPath: path.resolve(__dirname, '..', 'tsconfig.json'),
          },
        },
      ],
    });

    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  },
};