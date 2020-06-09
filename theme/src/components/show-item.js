/** @jsx jsx */
/* eslint-disable camelcase */
import { Styled, jsx, Flex, Button } from "theme-ui"
import PropTypes from "prop-types"
import ShowItemDate from "./show-item-date"

const Venue = ({ location, url }) => (
  <div sx={{ variant: "text.subheading" }}>
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
      <Button
        as="a"
        href={url}
        rel="external nofollow"
        variant="regular"
        sx={{ variant: "components.show.rsvp" }}
      >
        Detail / RSVP
      </Button>
    )
  } else {
    return (
      <small sx={{ variant: "components.show.noRsvp" }}>No RSVP info</small>
    )
  }
}

const ShowItem = ({ name, date, location, info_url, map_url }) => {
  return (
    <Flex as="article" sx={{ variant: "components.show.wrapper" }}>
      <ShowItemDate date={date} />
      <Flex sx={{ variant: "components.show.notDate" }}>
        <div sx={{ variant: "components.show.nameContainer" }}>
          <Styled.h3 sx={{ variant: "components.show.name" }}>{name}</Styled.h3>
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
