/** @jsx jsx */
import { Fragment } from "react"
import PropTypes from "prop-types"
import { Styled, jsx, Container } from "theme-ui"
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
  <Container sx={{ variant: "components.banner.content" }}>
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
  const { artist, images } = useMusicianConfig()
  const { bannerImg } = images
  const title = artist.name
  return (
    <div
      sx={{
        variant: "components.banner.wrapper",
        // Combine additional styles from user props
        ...getAdditionalStyles(color || "", bgOverlay || ""),
      }}
    >
      {bannerImg ? (
        <HeroImage
          fluid={bannerImg.fluid}
          sx={{ variant: "components.banner.hero" }}
        >
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
