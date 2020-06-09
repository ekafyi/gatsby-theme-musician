/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import useMusicianConfig from "../hooks/use-musician-config"
import AnchorLink from "react-anchor-link-smooth-scroll"

const TEMPORARY_BASEPATH = "/"
const linkStyle = { variant: "links.tomato" }

export const ExternalLink = ({ href, children, ...props }) => (
  <a href={href} rel="external nofollow" sx={linkStyle} {...props}>
    {children}
  </a>
)

export const ScrollLink = ({ href, children, ...props }) => (
  <AnchorLink href={href} sx={linkStyle} {...props}>
    {children}
  </AnchorLink>
)

export const RouterLink = ({ to, children, ...props }) => (
  <Link to={to} activeClassName="is-active" sx={linkStyle} {...props}>
    {children}
  </Link>
)

export default ({ isBasePath }) => {
  const { navigation } = useMusicianConfig()
  if (!navigation.length) return null
  return (
    <nav>
      {navigation.map(nav => {
        const isExternal = nav.url.startsWith("http")
        const isSamePage =
          isBasePath && (nav.url.startsWith("#") || nav.url.startsWith("/#"))
        const isHomeWithAnchor =
          !isBasePath && (nav.url.startsWith("#") || nav.url.startsWith("/#"))

        if (isExternal) {
          return (
            <ExternalLink key={nav.text} href={nav.url}>
              {nav.text}
            </ExternalLink>
          )
        } else if (isSamePage) {
          return (
            <ScrollLink key={nav.text} href={nav.url}>
              {nav.text}
            </ScrollLink>
          )
        } else if (isHomeWithAnchor) {
          return (
            <RouterLink key={nav.text} to={`${TEMPORARY_BASEPATH}${nav.url}`}>
              {nav.text}
            </RouterLink>
          )
        } else {
          return (
            <RouterLink key={nav.text} to={nav.url}>
              {nav.text}
            </RouterLink>
          )
        }
      })}
    </nav>
  )
}