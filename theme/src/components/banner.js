/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react"
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

export default props => {
  const { title, artist, bannerImg } = useSiteMetadata()

  if (bannerImg) {
    additionalStyles = {
      flexDirection: "column",
    }
  }

  if (props.bgOverlay) {
    bgOverlayStyles = {
      "&:after": {
        background: props.bgOverlay,
      },
    }
  }

  const bannerContentElement = (
    <BannerContent
      title={title}
      tagline={artist.hasOwnProperty("tagline") ? artist.tagline : null}
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
            {props.children ? props.children : bannerContentElement}
          </Container>
        </HeroImage>
      ) : (
        <Container
          className="GtmBanner__content-wrapper"
          sx={{ alignSelf: "center" }}
        >
          {props.children ? props.children : bannerContentElement}
        </Container>
      )}
    </div>
  )
}
