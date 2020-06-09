/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import VisuallyHidden from "@reach/visually-hidden"
import useMusicianConfig from "../hooks/use-musician-config"
import Icon from "./icon-by-name"

const Social = ({ data }) => {
  const { social } = useMusicianConfig()

  // Use YAML config values as default fallback
  if (!data.length && social.length) {
    if (typeof social[0].name !== "undefined") {
      if (social[0].name.length) {
        data = social
      }
    }
  }

  return data.map(socialLink => {
    if (socialLink.name) {
      return (
        <a
          key={socialLink.url}
          href={socialLink.url}
          sx={{ variant: "links.icon" }}
          rel="external nofollow"
        >
          <Icon name={socialLink.name.toLowerCase()} />
          <VisuallyHidden>{socialLink.name}</VisuallyHidden>
        </a>
      )
    } else return null
  })
}

Social.defaultProps = {
  data: [],
}

Social.propTypes = {
  data: PropTypes.array,
}

export default Social
