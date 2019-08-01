/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react"
import PropTypes from "prop-types"
import { jsx } from "theme-ui"
import VisuallyHidden from "@reach/visually-hidden"

import useSiteMetadata from "../use-site-metadata"
import IconLink from "./icon-link"
import Icon from "./icon-by-name"

const iconStyle = {
  fontSize: [4, 5],
  svg: {
    fill: "currentColor",
  },
}

const Social = ({ data }) => {
  const { social } = useSiteMetadata()

  // Use YAML config values as default fallback
  if (!data.length) {
    if (social.length) {
      if (typeof social[0].name !== "undefined") {
        if (social[0].name.length) {
          data = social
        }
      }
    }
  }

  return (
    <>
      {data.map((socialLink, index) => {
        if (socialLink.name) {
          return (
            <IconLink
              key={index}
              className="GtmSocialItem"
              href={socialLink.url}
              sx={{ ...iconStyle }}
              rel="external nofollow"
            >
              <Icon name={socialLink.name.toLowerCase()} />
              <VisuallyHidden>{socialLink.name}</VisuallyHidden>
            </IconLink>
          )
        } else return null
      })}
    </>
  )
}

Social.defaultProps = {
  data: [],
}

Social.propTypes = {
  data: PropTypes.array,
}

export default Social
