/** @jsx jsx */
import { Fragment } from "react"
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import VisuallyHidden from "@reach/visually-hidden"
import useMusicianConfig from "../hooks/use-musician-config"
import IconLink from "./icon-link"
import Icon from "./icon-by-name"

const iconStyle = {
  fontSize: [4, 5],
  svg: {
    fill: "currentColor",
  },
}

const Social = ({ data }) => {
  const { social } = useMusicianConfig()

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
    <Fragment>
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
    </Fragment>
  )
}

Social.defaultProps = {
  data: [],
}

Social.propTypes = {
  data: PropTypes.array,
}

export default Social
