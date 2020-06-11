/** @jsx jsx */
/* eslint-disable camelcase */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import Icon from "./icon-by-name"
import VisuallyHidden from "@reach/visually-hidden"

const ReleaseItemLink = ({ links = [] }) => {
  return (
    <section sx={{ variant: "components.release.links" }}>
      <VisuallyHidden>
        <h4>Links/Listen</h4>
      </VisuallyHidden>
      <ul sx={{ variant: "list.inline" }}>
        {links.map(link => {
          return (
            <li key={link.name}>
              <a
                href={link.url}
                rel="external nofollow"
                sx={{ variant: "links.listen" }}
              >
                <Icon name={link.name.toLowerCase().replace(/\s/g, "")} />
                &nbsp;{link.name}
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default ReleaseItemLink

ReleaseItemLink.propTypes = {
  links: PropTypes.array,
}
