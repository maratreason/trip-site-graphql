module.exports = {
    siteMetadata: {
        title: `Travel`,
        description: `Мой первый проект на gatsby`,
        author: `@gatsbyjs`,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `video`,
                path: `${__dirname}/src/assets/videos/`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `./src/data/`,
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-styled-components`,
        `gatsby-transformer-json`,
    ],
};
