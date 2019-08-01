module.exports = options => ({
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
        name: "content",
        path: options.contentPath || "content",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-embed-spotify`,
            options: {
              width: 400, // default is "100%"
              height: 600, // default is 400
            },
          },
          {
            resolve: `gatsby-remark-embed-soundcloud`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1440,
              linkImagesToOriginal: false,
              quality: 90,
              withWebP: true,
              // showCaptions: true,
              // sizeByPixelDensity: true
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
  ],
})
