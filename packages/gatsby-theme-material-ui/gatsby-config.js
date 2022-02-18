const pkg = require(`./package.json`);

const defaultWebFontsConfig = {
  fonts: {
    google: [
      {
        family: `Roboto`,
        variants: [`300`, `400`, `500`],
      },
    ],
  },
};

module.exports = (themeOptions) => {
  const {
    muiPluginConfig = {},
    webFontsConfig = defaultWebFontsConfig,
  } = themeOptions;

  return {
    plugins: [
      {
        resolve: `gatsby-theme-material-ui-top-layout`,
        options: {
          ...muiPluginConfig,
        },
      },
      {
        resolve: `gatsby-plugin-material-ui`,
        options: {
          ...muiPluginConfig,
        },
      },
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-plugin-webfonts`,
        options: {
          ...webFontsConfig,
        },
      },
      {
        // This is only needed temporarily. Themes will automatically be transpiled in later versions.
        resolve: `gatsby-plugin-compile-es6-packages`,
        options: {
          modules: [pkg.name],
        },
      },
    ],
  };
};
