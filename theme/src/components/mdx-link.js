/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react"
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import isAbsoluteURL from "is-absolute-url"

// !TODO refactor
// This is a copy from nav-link.js without the style

export default ({ href, ...props }) => {
  // if external, use regular anchor element
  const isExternal = isAbsoluteURL(href || "")
  if (isExternal) {
    return (
      <Styled.a {...props} href={href} rel="external nofollow">
        {props.children}
      </Styled.a>
    )
  }

  // else use Gatsby Link component
  const to = props.to || href
  return <Styled.a as={Link} {...props} to={to} activeClassName="is-active" />
}
