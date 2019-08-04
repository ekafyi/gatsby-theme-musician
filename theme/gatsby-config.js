let pwaObject = {
  short_name: null,
  background_color: null,
  theme_color: null,
  display: null,
}

module.exports = options => {
  const { pwaName, pwaOptions = { ...pwaObject } } = options

  return {
    siteMetadata: {
      title: "Gatsby Theme Musician",
      description: "",
      siteUrl: "https://github.com/ekafyi/eka-gatsby-playground",
    },
    plugins: [
      `gatsby-transformer-sharp`,
      `gatsby-transformer-yaml`,
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: `content`,
          path: options.contentPath || "content",
        },
      },
      {
        resolve: "gatsby-plugin-mdx",
        options: {
          // defaultLayouts doesn't work?
          // defaultLayouts: {
          //   default: require.resolve("./src/components/layout.js"),
          // },
          extensions: [".mdx", ".md"],
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-embed-spotify`,
              options: {
                width: 400, // default is "100%"
                height: 400, // default is 400
              },
            },
            {
              resolve: `gatsby-remark-embed-soundcloud`,
              // These options don't work at the moment
              options: {
                width: 400, // default is "100%"
                height: 400, // default is 300
                // color: "#ff5500", // default is #ff5500
                // autoplay: true, // default is false
              },
            },
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 1440,
                linkImagesToOriginal: false,
                quality: 90,
                withWebP: true,
                sizeByPixelDensity: true,
              },
            },
          ],
        },
      },
      {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: `${__dirname}/src/pages`,
        },
      },
      `gatsby-plugin-sharp`,
      `gatsby-plugin-theme-ui`,
      `gatsby-plugin-react-helmet`,

      /**
       * The two plugins below must be in the specified order
       */

      // gatsby-plugin-manifest has to be BEFORE gatsby-plugin-offline
      // Only add this if user defines their PWA name
      pwaName && {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: pwaName || "gatsby-theme-musician",
          short_name:
            pwaOptions.short_name || pwaName || "gatsby-theme-musician",
          start_url: options.basePath || `/`,
          background_color: pwaOptions.background_color || `#ccc`,
          theme_color: pwaOptions.theme_color || `#111`,
          display: pwaOptions.display || `standalone`,
          icon: `${options.contentPath || "content"}/images/favicon.png`,
        },
      },
      // gatsby-plugin-offline has to be AFTER gatsby-plugin-manifest
      `gatsby-plugin-offline`,
    ].filter(Boolean),
  }
}
