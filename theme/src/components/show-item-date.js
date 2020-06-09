/** @jsx jsx */
/* eslint-disable camelcase */
import { jsx, Flex, Text } from "theme-ui"
import PropTypes from "prop-types"
import { dateSettings } from "../utils"

const ShowItemDate = ({ date }) => {
  return (
    <Flex
      as="time"
      dateTime={date}
      aria-label={new Date(date).toLocaleDateString("en-GB", dateSettings)}
      sx={{ variant: "components.show.date" }}
    >
      <Text variant="date.month">
        {new Date(date).toLocaleDateString("en-GB", { month: "short" })}
      </Text>
      <Text variant="date.day">
        {new Date(date).toLocaleDateString("en-GB", { day: "numeric" })}
      </Text>
    </Flex>
  )
}

export default ShowItemDate

ShowItemDate.propTypes = {
  date: PropTypes.string,
}
