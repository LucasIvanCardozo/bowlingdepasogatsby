/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Bowling de Paso - Mar del Plata`,
    siteUrl: `https://www.bowlingdepaso.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `none`,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        RewriteBase: true,
        https: true,
        www: true,
        DisallowSymLinks: true,
        host: 'www.bowlingdepaso.com',
      },
    },
    'gatsby-plugin-sitemap',
  ],
};
