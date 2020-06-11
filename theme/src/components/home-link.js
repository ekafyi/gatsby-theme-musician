/** @jsx jsx */
import { jsx, Link as ThemeUiLink } from "theme-ui"
import { Link } from "gatsby"
import Img from "gatsby-image"
import useSiteMetadata from "../hooks/use-site-metadata"
import useMusicianConfig from "../hooks/use-musician-config"
import AnchorLink from "react-anchor-link-smooth-scroll"

const TEMPORARY_BASEPATH = "/"
const variantName = "header.home"

export const BasePathLink = ({ children }) => (
  <ThemeUiLink as={AnchorLink} href="#___gatsby" variant={variantName}>
    {children}
  </ThemeUiLink>
)

export const OtherPathLink = ({ children }) => (
  <ThemeUiLink as={Link} to={TEMPORARY_BASEPATH} variant={variantName}>
    {children}
  </ThemeUiLink>
)

export default ({ isBasePath, ...props }) => {
  const { title } = useSiteMetadata()
  const { artist, images } = useMusicianConfig()
  const { logoImg } = images

  const homeTitle = title !== "Gatsby Theme Musician" ? title : artist.name

  return (
    <div {...props}>
      {logoImg ? (
        // "Home" link on Home page
        isBasePath ? (
          <BasePathLink>
            <Img fixed={logoImg.fixed} />
          </BasePathLink>
        ) : (
          <OtherPathLink>
            <Img fixed={logoImg.fixed} />
          </OtherPathLink>
        )
      ) : isBasePath ? (
        <BasePathLink>{homeTitle}</BasePathLink>
      ) : (
        // "Home" link on non-Home pages
        <OtherPathLink>{homeTitle}</OtherPathLink>
      )}
    </div>
  )
}
