const fs = require(`fs-extra`)
const path = require(`path`)
const mkdirp = require(`mkdirp`)
const { createFilePath } = require("gatsby-source-filesystem")

// Customizable theme options we only need to check once
let basePath
let contentPath

// Not a theme option, hardcoded to make it easier to shadow files
let configPath = "src/gatsby-theme-musician/config"

// Templates are data-fetching wrappers that import components
const LandingTemplate = require.resolve(`./src/templates/landing`)
const MdxTemplate = require.resolve(`./src/templates/mdx-page`)

/**
 * Make sure the site has necessary directories and files.
 * Called once Gatsby has initialized itself and is ready to bootstrap your site.
 */

exports.onPreBootstrap = ({ store }, themeOptions) => {
  const { program } = store.getState()

  basePath = themeOptions.basePath || `/`
  contentPath = themeOptions.contentPath || `content`

  // Create theme directories in site
  const dirs = [
    path.join(program.directory, contentPath),
    path.join(program.directory, configPath),
  ]

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir)
    }
  })

  // Copy config files from theme to site
  const configSrc = path.join(__dirname, "src/config")
  const configDest = configPath
  const configFilesDest = fs.readdirSync(configDest)
  if (!configFilesDest.length && configSrc !== configDest) {
    fs.copySync(configSrc, configDest)
  }

  // Copy content files from theme to site
  const contentSrc = path.join(__dirname, "content")
  const contentDest = contentPath || "content"
  const contentFilesDest = fs.readdirSync(contentDest)
  if (!contentFilesDest.length && contentSrc !== contentDest) {
    fs.copySync(contentSrc, contentDest)
  }
}

/**
 * Customize GraphQL Schema to enable nullable (empty) fields
 *
 * https://www.gatsbyjs.org/docs/schema-customization
 */

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type ReleasesYaml implements Node {
      title: String!
      date: Date
      release_type: String
      image: File
      links: [ReleaseLink]
    }
    type ReleaseLink {
      name: String!
      url: String!
    }

    type ShowsYaml implements Node @dontInfer {
      name: String!
      date: Date!
      location: String!
      info_url: String
      map_url: String
    }
  `
  createTypes(typeDefs)
}

/**
 * Create fields for page slugs and source
 *
 * https://www.gatsbyjs.org/docs/node-apis/#onCreateNode
 */

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // Make sure it's an MDX node
  if (node.internal.type !== `Mdx`) {
    return
  }

  // Create source field (according to contentPath)
  const fileNode = getNode(node.parent)
  const source = fileNode.sourceInstanceName

  if (node.internal.type === `Mdx` && source === contentPath) {
    const slug = createFilePath({
      node: fileNode,
      getNode,
      basePath: contentPath,
    })
    createNodeField({
      name: "slug",
      node,
      value: slug,
    })
  }
}

/**
 * Create pages programmatically
 *
 * https://www.gatsbyjs.org/docs/mdx/programmatically-creating-pages/
 */

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Create Landing page
  createPage({
    path: basePath,
    component: LandingTemplate,
    context: {
      isBasePath: true,
    },
  })

  // Create pages from all MDX files _except_ Landing page
  const result = await graphql(`
    {
      allMdx(
        filter: {
          fileAbsolutePath: { regex: "/^((?!artist-landing-page.).)*$/" }
        }
      ) {
        edges {
          node {
            body
            excerpt
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic(result.errors)
  }

  const { allMdx } = result.data
  const pages = allMdx.edges

  // Create a page for each Post
  pages.forEach(({ node: page }, index) => {
    const { slug } = page.fields
    createPage({
      path: slug,
      component: MdxTemplate,
      context: {
        ...page,
      },
    })
  })
}
