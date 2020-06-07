const fs = require(`fs-extra`)
const path = require(`path`)
const { createFilePath } = require("gatsby-source-filesystem")

// Define customizable theme options we only need to check once
let basePath // URL path for landing page (default `/`)
let contentPath // Directory containing theme files (default `content`)

// Define template components
const MusicianPageTemplate = require.resolve(`./src/templates/page`)

// Define uncustomizable theme settings
const configPath = "src/gatsby-theme-musician/config" // Path where we will copy user-facing theme configuration files (artist detail, metadata, etc)
const landingFileName = "artist-landing-page.mdx" // Landing page MDX file name

/**
 * Make sure the site has necessary directories and files.
 * Called once Gatsby has initialized itself and is ready to bootstrap your site.
 *
 * https://www.gatsbyjs.org/tutorial/building-a-theme/#create-a-data-directory-using-the-onprebootstrap-lifecycle
 */
exports.onPreBootstrap = ({ store }, themeOptions) => {
  const { program } = store.getState()

  basePath = themeOptions.basePath || `/`
  contentPath = themeOptions.contentPath || `content`

  const dirs = [
    path.join(program.directory, contentPath),
    path.join(program.directory, configPath),
  ]

  // Create theme directories in site
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.ensureDirSync(dir, {
        recursive: true,
      })
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
 * Customize GraphQL Schema to setup our custom types.
 *
 * API: https://www.gatsbyjs.org/docs/node-apis/#createSchemaCustomization
 * Explanation: https://www.gatsbyjs.org/docs/schema-customization
 */
exports.createSchemaCustomization = ({ actions }) => {
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
  actions.createTypes(typeDefs)
}

/**
 * When a node is created, extend it and programmatically add a "slug" field, which tells Gatsby the URL to render to.
 *
 * API: https://www.gatsbyjs.org/docs/node-apis/#onCreateNode
 * Explanation: https://www.gatsbyjs.org/docs/mdx/programmatically-creating-pages/#generate-slugs
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type !== `Mdx`) {
    return // Make sure it's an MDX node
  }

  /**
   * We define the condition for processing the nodes. In this case, we only
   * process MDX nodes from our "content" directory to pass to createPages().
   *
   * https://www.gatsbyjs.org/docs/actions/#createNodeField
   */
  const fileNode = getNode(node.parent)
  const source = fileNode.sourceInstanceName

  if (source === contentPath) {
    // eg. If we have "content/sample-page.mdx", define the slug path "/sample-page"
    let slug = createFilePath({
      node: fileNode,
      getNode,
      basePath: contentPath,
    })
    // Set custom slug path for Landing Page to use basePath (default `/`)
    if (fileNode.base === landingFileName) {
      slug = basePath
    }
    // Add a field called "slug" with the above value (eg. "/sample-page"),
    // which is then available in createPages (the "fields" node).
    createNodeField({
      node,
      name: "slug",
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

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          fields {
            slug
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error loading gatsby-theme-musician`, result.errors)
    return
  }

  // Create pages from our content directory
  const pages = result.data.allMdx.nodes.filter(
    page => page.parent.sourceInstanceName === contentPath
  )
  pages.forEach(page => {
    const isBasePath = page.fields.slug === basePath
    createPage({
      path: page.fields.slug,
      component: MusicianPageTemplate,
      context: {
        // ...page, // Not necessary for now
        isBasePath, // Used for navigation in header component
      },
    })
  })
}
