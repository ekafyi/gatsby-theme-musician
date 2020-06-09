/** @jsx jsx */
/* eslint-disable camelcase */
import { Styled, jsx, Flex } from "theme-ui"
import PropTypes from "prop-types"
import ShowItemDate from "./show-item-date"

const Venue = ({ location, url }) => (
  <div>
    {location || ""}
    {url && " · "}
    {url && (
      <Styled.a href={url} rel="external nofollow">
        Map
      </Styled.a>
    )}
  </div>
)

const RSVPButton = ({ url }) => {
  if (url) {
    return (
      <a
        href={url}
        rel="external nofollow"
        sx={{ variant: "textStyles.button" }}
      >
        Detail / RSVP
      </a>
    )
  } else {
    return <small sx={{ color: "muted" }}>No RSVP info</small>
  }
}

const ShowItem = ({ name, date, location, info_url, map_url }) => {
  return (
    <Flex as="article">
      <ShowItemDate date={date} />
      <Flex>
        <div>
          <Styled.h3>{name}</Styled.h3>
          <Venue location={location} url={map_url} />
        </div>
        <RSVPButton url={info_url} />
      </Flex>
    </Flex>
  )
}

export default ShowItem

ShowItem.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  location: PropTypes.string,
  info_url: PropTypes.string,
  map_url: PropTypes.string,
}
