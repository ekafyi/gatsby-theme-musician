/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react"
import { jsx } from "theme-ui"

import useSiteMetadata from "../use-site-metadata"
import Grids from "./grids"
import LandingSectionTitle from "./landing-section-title"
import ReleaseItem from "./release-item"

const Releases = ({ releases = [], columns }) => {
  // Use text label from YAML config
  let sectionTitle = "Releases"
  const { textLabels } = useSiteMetadata()
  if (typeof textLabels.section_releases_title !== "undefined") {
    if (textLabels.section_releases_title.length) {
      sectionTitle = textLabels.section_releases_title
    }
  }

  // Define custom grid template only if not defined from the component
  let customGridTemplateColumns
  if (!columns) {
    customGridTemplateColumns = [null, "repeat(auto-fit,minmax(14em,1fr))"]
  }

  return (
    <section
      id="releases"
      sx={{
        variant: "layout.landingSection",
      }}
    >
      <LandingSectionTitle>{sectionTitle}</LandingSectionTitle>
      <Grids
        as="ol"
        columns={columns}
        gap="calc(1em + 1vw)"
        sx={{
          gridTemplateColumns: customGridTemplateColumns,
        }}
      >
        {releases.length > 0 &&
          releases.map(node => {
            return (
              <li key={node.id}>
                <ReleaseItem {...node} />
              </li>
            )
          })}
      </Grids>
    </section>
  )
}

export default Releases
