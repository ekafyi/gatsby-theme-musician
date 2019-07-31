/** @jsx jsx */
/* eslint-disable camelcase */
// eslint-disable-next-line no-unused-vars
import React from "react"
import { Styled, jsx } from "theme-ui"

const ShowItem = ({ id, name, date, location, info_url, map_url }) => {
  return (
    <li key={id} className="GtmShowItem" sx={{ variant: "components.show" }}>
      <time
        dateTime={date}
        aria-label={new Date(date).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
        className="GtmShowItem__date"
        sx={{ variant: "components.show.date" }}
      >
        <span
          className="GtmShowItem__month"
          sx={{ variant: "components.show.date.month" }}
        >
          {" "}
          {new Date(date).toLocaleDateString("en-GB", {
            month: "short",
          })}{" "}
        </span>
        <span
          className="GtmShowItem__day"
          sx={{ variant: "components.show.date.day" }}
        >
          {new Date(date).toLocaleDateString("en-GB", {
            day: "numeric",
          })}
        </span>
      </time>
      <div sx={{ variant: "components.show.colWrapper" }}>
        <div sx={{ variant: "components.show.desc" }}>
          <Styled.h4
            className="GtmShowItem__title"
            sx={{
              m: 0,
              pt: [0, 2],
              pb: [1, 2],
            }}
          >
            {name}
          </Styled.h4>
          <div sx={{ variant: "textStyles.itemSubheading" }}>
            {location}
            {map_url && (
              <>
                {" "}
                &middot;{" "}
                <Styled.a href={info_url} rel="external nofollow">
                  <strong>Map</strong>
                </Styled.a>
              </>
            )}
          </div>
        </div>
        <div sx={{ variant: "components.show.rsvpLink" }}>
          {info_url ? (
            <a
              href={info_url}
              rel="external nofollow"
              sx={{ variant: "textStyles.button" }}
            >
              Detail / RSVP
            </a>
          ) : (
            <small
              sx={{
                color: "muted",
              }}
            >
              No RSVP info
            </small>
          )}
        </div>
      </div>
    </li>
  )
}

export default ShowItem
