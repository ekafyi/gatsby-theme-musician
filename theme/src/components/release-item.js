/** @jsx jsx */
/* eslint-disable camelcase */
import { Styled, jsx, AspectRatio, Flex } from "theme-ui"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import ReleaseItemLink from "./release-item-link"

const ReleaseItem = ({ title, date, release_type, image, links }) => {
  return (
    <article>
      <Flex sx={{ variant: "components.release.wrapper" }}>
        <AspectRatio ratio={1 / 1}>
          {image ? (
            <Img
              fluid={image.childImageSharp.fluid}
              alt=""
              sx={{ variant: "components.release.image" }}
            />
          ) : (
            <Flex
              aria-hidden="true"
              sx={{ variant: "components.release.noImage" }}
            >
              <span>no cover image</span>
            </Flex>
          )}
        </AspectRatio>
        <div>
          <Styled.h3 sx={{ variant: "components.release.title" }}>
            {title}
          </Styled.h3>
          <div sx={{ variant: "text.subheading" }}>
            {new Date(date).toLocaleDateString("en-GB", { year: "numeric" })}
            {release_type ? " · " + release_type : ""}
          </div>
          {links.length > 0 && <ReleaseItemLink links={links} />}
        </div>
      </Flex>
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
