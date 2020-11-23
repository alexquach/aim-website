/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-theme-ui",
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    }
  ],
  pathPrefix: "/",
}
