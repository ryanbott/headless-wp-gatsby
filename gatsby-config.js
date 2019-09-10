module.exports = {
  siteMetadata: {
    title: `WP Headless Gatsby`,
    description: `Headless WordpPress CMS test with Gatsby`,
    author: `@ryanbott`,
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-image`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `ryanbott.wordpress.com`,
        protocol: `http`,
        hostingWPCOM: true,
        useACF: true,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
