import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import MdxWrapper from "../components/mdx-wrapper"

const MdxTemplate = props => {
  const { pageContext, location } = props
  return (
    <MdxWrapper>
      <MDXRenderer location={location}>{pageContext.body}</MDXRenderer>
    </MdxWrapper>
  )
}

export default MdxTemplate
