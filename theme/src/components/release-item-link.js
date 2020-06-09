/** @jsx jsx */
/* eslint-disable camelcase */
import { Styled, jsx } from "theme-ui"
import PropTypes from "prop-types"
import Icon from "./icon-by-name"

const ReleaseItemLink = ({ links = [] }) => {
  return (
    <section>
      <h4>Listen</h4>
      <Styled.ul>
        {links.map(link => {
          return (
            <li key={link.name}>
              <a href={link.url} rel="external nofollow">
                <Icon name={link.name.toLowerCase().replace(/\s/g, "")} />
                &nbsp;{link.name}
              </a>
            </li>
          )
        })}
      </Styled.ul>
    </section>
  )
}

export default ReleaseItemLink

ReleaseItemLink.propTypes = {
  links: PropTypes.array,
}
