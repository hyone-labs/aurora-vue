const path = require('path');

const alias = {
  'vue': "vue/dist/vue.esm-bundler.js",
  '@': path.resolve(__dirname, '..', 'src'),
  '@components': path.resolve(__dirname, '..', 'src', 'components'),
  '@styles': path.resolve(__dirname, '..', 'src', 'styles'),
  '@utils': path.resolve(__dirname, '..', 'src', 'utils'),
  '@plugins': path.resolve(__dirname, '..', 'src', 'plugins'),
  '@utils': path.resolve(__dirname, '..', 'src', 'utils'),
};

module.exports = {
  stories: [
    "../src/**/*.stories.mdx", 
    // "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "storybook-design-token"],
  framework: "@storybook/vue3",
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config) => {

    config.resolve.alias = alias;

    // config.module.rules.push({
    //   test: /\.vue$/,
    //   loader: 'vue-loader'
    // });

    config.module.rules.push({
      test: /\.?js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          sourceType: 'unambiguous',
          babelrc: false,
        },
      }],
    });

    config.module.rules.push({
      test: /\.(scss|sass)$/i,
      use: [
        "vue-style-loader",
        "css-loader",
        "sass-loader"
      ],
    });

    config.module.rules.push({
      test: /\.(png|jp(e*)g|svg|gif)$/,
      use: ['file-loader'],
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
