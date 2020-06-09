/** @jsx jsx */
/* eslint-disable camelcase */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import { dateSettings } from "../utils"

const ShowItemDate = ({ date }) => {
  return (
    <time
      dateTime={date}
      aria-label={new Date(date).toLocaleDateString("en-GB", dateSettings)}
      // className="GtmShowItem__date"
      // sx={{ variant: "components.show.date" }}
    >
      <span
      // className="GtmShowItem__month"
      // sx={{ variant: "components.show.date.month" }}
      >
        {new Date(date).toLocaleDateString("en-GB", { month: "short" })}
      </span>
      <span
      // className="GtmShowItem__day"
      // sx={{ variant: "components.show.date.day" }}
      >
        {new Date(date).toLocaleDateString("en-GB", { day: "numeric" })}
      </span>
    </time>
  )
}

export default ShowItemDate

ShowItemDate.propTypes = {
  date: PropTypes.string,
}
