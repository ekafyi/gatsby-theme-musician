const fs = require(`fs-extra`)
const path = require(`path`)
const mkdirp = require(`mkdirp`)

// These are customizable theme options we only need to check once
let basePath
let contentPath

// Not a theme option, hardcoded to make it easier to shadow files
let configPath = "src/gatsby-theme-musician/config"

// These templates are simply data-fetching wrappers that import components
const LandingTemplate = require.resolve(`./src/templates/landing`)

/* 
	Make sure the site has necessary directories and files.
	Runs before Gatsby starts working.
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

/* 
	Create pages programmatically
  https://www.gatsbyjs.org/docs/mdx/programmatically-creating-pages/
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  // Create Landing page
  createPage({
    path: basePath,
    component: LandingTemplate,
  })
}
