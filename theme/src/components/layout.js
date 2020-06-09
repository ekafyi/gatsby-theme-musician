/** @jsx jsx */
import { Fragment } from "react"
import { jsx } from "theme-ui"
import SEO from "./seo"
import SkipLink from "./skip-link"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ location, isBasePath, children }) => {
  return (
    <Fragment>
      <SEO pathname={location.pathname} />
      <SkipLink>Skip to content</SkipLink>
      <Header isBasePath={isBasePath} />
      <main id="main" sx={{ variant: "layout.main" }}>
        {children}
      </main>
      <Footer />
    </Fragment>
  )
}

export default Layout
