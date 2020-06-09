/** @jsx jsx */
import { Fragment } from "react"
import PropTypes from "prop-types"
import { Styled, jsx, Container } from "theme-ui"
import useSiteMetadata from "../hooks/use-site-metadata"
import useMusicianConfig from "../hooks/use-musician-config"
import HeroImage from "./hero-image"
import Social from "./social"

const getAdditionalStyles = (color, bgOverlay) => {
  const obj = {}
  if (color) obj.color = color
  if (bgOverlay) {
    obj["&:after"] = {
      background: bgOverlay,
    }
  }
  return obj
}

const BannerContent = ({ title, tagline, children }) => (
  <Container className="GtmBanner__content-wrapper">
    {children || (
      <Fragment>
        <Styled.h1>{title}</Styled.h1>
        {tagline && <p>{tagline}</p>}
        <Social />
      </Fragment>
    )}
  </Container>
)

const Banner = ({ children, bgOverlay, color }) => {
  const { title } = useSiteMetadata()
  const { artist, images } = useMusicianConfig()
  const { bannerImg } = images
  return (
    <div
      sx={{
        variant: "components.banner",
        ...getAdditionalStyles(color || "", bgOverlay || ""),
      }}
    >
      {bannerImg ? (
        <HeroImage className="GtmBanner__hero-wrapper" fluid={bannerImg.fluid}>
          <BannerContent title={title} tagline={artist.tagline || ""}>
            {children || null}
          </BannerContent>
        </HeroImage>
      ) : (
        <BannerContent title={title} tagline={artist.tagline || ""}>
          {children || null}
        </BannerContent>
      )}
    </div>
  )
}

Banner.propTypes = {
  children: PropTypes.any,
  bgOverlay: PropTypes.string,
  color: PropTypes.string,
}

export default Banner
