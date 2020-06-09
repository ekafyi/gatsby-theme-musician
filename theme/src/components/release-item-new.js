/** @jsx jsx */
/* eslint-disable camelcase */
import { Styled, jsx, AspectRatio } from "theme-ui"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import ReleaseItemLink from "./release-item-link"

const ReleaseItem = ({ title, date, release_type, image, links }) => {
  return (
    <article>
      <AspectRatio ratio={1 / 1}>
        {image ? (
          <Img fluid={image.childImageSharp.fluid} alt="" />
        ) : (
          <small aria-hidden="true">no cover image</small>
        )}
      </AspectRatio>
      <Styled.h3>{title}</Styled.h3>
      <div>
        {new Date(date).toLocaleDateString("en-GB", { year: "numeric" })}
        {release_type ? " · " + release_type : ""}
      </div>
      {links.length > 0 && <ReleaseItemLink links={links} />}
    </article>
  )
}

export default ReleaseItem

ReleaseItem.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  release_type: PropTypes.string,
  image: PropTypes.object,
  links: PropTypes.array,
}
