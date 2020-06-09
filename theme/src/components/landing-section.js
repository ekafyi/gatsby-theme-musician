/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import PropTypes from "prop-types"
import { slugify } from "../utils"

const LandingSection = ({ children, title, id, ...props }) => {
  return (
    <section
      id={id || slugify(title)}
      sx={{ variant: "components.landing.section" }}
      {...props}
    >
      <Styled.h2 sx={{ variant: "components.landing.sectionTitle" }}>
        {title || "Untitled Section"}
      </Styled.h2>
      {children || ""}
    </section>
  )
}

export default LandingSection

LandingSection.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string.isRequired,
  id: PropTypes.string,
}
