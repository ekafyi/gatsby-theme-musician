/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react"
import { jsx } from "theme-ui"
import MdxLink from "./mdx-link"

export default props => {
  return (
    <MdxLink sx={{ variant: "textStyles.navLink" }} {...props}>
      {props.children}
    </MdxLink>
  )
}
