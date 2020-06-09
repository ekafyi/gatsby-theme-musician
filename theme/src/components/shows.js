/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import LandingSection from "./landing-section"
import ShowItem from "./show-item-new"
import useReleasesShowsData from "../hooks/use-releases-shows-data"

const defaultTitle = "Shows"
const defaultEmpty = "No shows yet"

const Shows = ({
  children,
  shows,
  title = defaultTitle,
  empty = defaultEmpty,
}) => {
  // `shows` props is now optional; the fallback/default data comes from hook.
  const yamlShows = useReleasesShowsData().shows
  const renderShows = shows || yamlShows

  return (
    <LandingSection title={title}>
      {children || ""}
      {renderShows.length > 0 ? (
        renderShows.map(({ id, ...node }) => {
          return <ShowItem key={id} {...node} />
        })
      ) : (
        <div sx={{ variant: "components.landing.empty" }}>{empty || ""}</div>
      )}
    </LandingSection>
  )
}

export default Shows

Shows.propTypes = {
  children: PropTypes.any,
  shows: PropTypes.any,
  title: PropTypes.string, // required; default value passed in argument
  empty: PropTypes.string,
}
