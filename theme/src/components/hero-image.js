/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react"
import Img from "gatsby-image"
import { Styled, jsx } from "theme-ui"

const HeroImage = props => {
  return (
    <Styled.div {...props} sx={{ variant: "components.heroImg.parent" }}>
      <Img
        sx={{ variant: "components.heroImg.gatsbyImg" }}
        fluid={props.fluid}
      />
      <div sx={{ variant: "components.heroImg.content" }}>{props.children}</div>
    </Styled.div>
  )
}

export default HeroImage
