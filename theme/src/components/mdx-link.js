/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import isAbsoluteURL from "is-absolute-url"

// DO NOT style here; style in theme-ui's theme.styles.a.

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
