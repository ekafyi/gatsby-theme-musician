/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react"
import { jsx } from "theme-ui"

import useSiteMetadata from "../use-site-metadata"
import LandingSectionTitle from "./landing-section-title"
import ShowItem from "./show-item"

const Shows = ({ shows = [] }) => {
  // Use text label from YAML user config
  let sectionTitle = "Shows"
  const { textLabels } = useSiteMetadata()
  if (typeof textLabels.section_shows_title !== "undefined") {
    if (textLabels.section_shows_title.length) {
      sectionTitle = textLabels.section_shows_title
    }
  }

  return (
    <section id="shows" sx={{ variant: "layout.landingSection" }}>
      <LandingSectionTitle>{sectionTitle}</LandingSectionTitle>
      <ol
        sx={{
          m: 0,
          p: 0,
          listStyle: "none",
        }}
      >
        {shows.length > 0 &&
          shows.map(node => {
            return <ShowItem {...node} key={node.id} />
          })}
      </ol>
    </section>
  )
}

export default Shows
