/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/bowlingdepasogatsby",
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bowling de Paso - Mar del Plata`,
        short_name: `Bowling de Paso`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        icon: `src/assets/favicon.png`,
        display: `standalone`,
      },
    },
  ],
};
