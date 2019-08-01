/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react"
import PropTypes from "prop-types"
import { Styled, jsx, Container } from "theme-ui"

import useSiteMetadata from "../use-site-metadata"
import HeroImage from "./hero-image"
import Social from "./social"

let additionalStyles = {}
let bgOverlayStyles = {}

const BannerContent = ({ title, tagline }) => (
  <>
    <Styled.h1>{title}</Styled.h1>
    {tagline && <p>{tagline}</p>}
    <Social />
  </>
)

const Banner = ({ children, bgOverlay, color }) => {
  const { title, artist, bannerImg } = useSiteMetadata()

  if (bannerImg) {
    additionalStyles["flexDirection"] = "column"
  }
  if (color) {
    additionalStyles["color"] = "color"
  }

  if (bgOverlay) {
    bgOverlayStyles = {
      "&:after": {
        background: bgOverlay,
      },
    }
  }

  const bannerContentElement = (
    <BannerContent
      title={title}
      tagline={typeof artist.tagline === "undefined" ? null : artist.tagline}
    />
  )

  return (
    <div
      className="GtmBanner"
      sx={{
        variant: "components.banner",
        ...additionalStyles,
        ...bgOverlayStyles,
      }}
    >
      {bannerImg ? (
        <HeroImage
          className="GtmBanner__hero-wrapper"
          fluid={bannerImg.fluid}
          sx={{ flexGrow: 1 }}
        >
          <Container className="GtmBanner__content-wrapper">
            {children || bannerContentElement}
          </Container>
        </HeroImage>
      ) : (
        <Container
          className="GtmBanner__content-wrapper"
          sx={{ alignSelf: "center" }}
        >
          {children || bannerContentElement}
        </Container>
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
