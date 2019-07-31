/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react"
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import isAbsoluteURL from "is-absolute-url"

const styles = { variant: "textStyles.navLink" }

export default ({ href, ...props }) => {
  // if external, use regular anchor element
  const isExternal = isAbsoluteURL(href || "")
  if (isExternal) {
    return (
      <a {...props} href={href} sx={styles} rel="external nofollow">
        {props.children}
      </a>
    )
  }

  // else use Gatsby Link component
  const to = props.to || href
  return <Link {...props} to={to} sx={styles} activeClassName="is-active" />
}
