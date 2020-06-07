/**
 * Gatsby Theme Musician page template
 */
import React from "react"
import { graphql } from "gatsby"
import CustomMDXProvider from "../components/custom-mdx-provider"
import { MDXRenderer } from "gatsby-plugin-mdx"
import useReleasesShowsData from "../hooks/use-releases-shows-data"
// import { MDXProvider } from "@mdx-js/react" // use for debugging

const PageTemplate = ({ data, pageContext }) => {
  const { isBasePath } = pageContext // used for header navigation component

  const { releases, shows } = useReleasesShowsData()

  return (
    <CustomMDXProvider>
      <MDXRenderer
        releases={releases || []}
        shows={shows || []}
        isBasePath={isBasePath}
      >
        {data.mdx.body}
      </MDXRenderer>
    </CustomMDXProvider>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query PageTemplateQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
    }
  }
`
