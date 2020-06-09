/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Img from "gatsby-image"
import useSiteMetadata from "../hooks/use-site-metadata"
import useMusicianConfig from "../hooks/use-musician-config"
import AnchorLink from "react-anchor-link-smooth-scroll"

const TEMPORARY_BASEPATH = "/"

export const BasePathLink = ({ children }) => (
  <AnchorLink href="#___gatsby">{children}</AnchorLink>
)

export default ({ isBasePath }) => {
  const { title } = useSiteMetadata()
  const { artist, images } = useMusicianConfig()
  const { logoImg } = images

  const homeTitle = title !== "Gatsby Theme Musician" ? title : artist.name

  return (
    <div>
      {logoImg ? (
        isBasePath ? (
          <BasePathLink>
            <Img fixed={logoImg.fixed} />
          </BasePathLink>
        ) : (
          <Link to={TEMPORARY_BASEPATH}>
            <Img fixed={logoImg.fixed} />
          </Link>
        )
      ) : isBasePath ? (
        <BasePathLink>{homeTitle}</BasePathLink>
      ) : (
        <Link to={TEMPORARY_BASEPATH}>{homeTitle}</Link>
      )}
    </div>
  )
}
