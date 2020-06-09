/** @jsx jsx */
import Img from "gatsby-image"
import { jsx } from "theme-ui"

const HeroImage = ({ fluid, children, ...props }) => {
  return (
    <div {...props} sx={{ variant: "components.hero.wrapper" }}>
      <Img sx={{ variant: "components.hero.image" }} fluid={fluid} />
      <div sx={{ variant: "components.hero.content" }}>{children}</div>
    </div>
  )
}

export default HeroImage
