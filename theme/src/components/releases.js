/** @jsx jsx */
import { jsx, Grid } from "theme-ui"
import PropTypes from "prop-types"
import LandingSection from "./landing-section"
import useReleasesShowsData from "../hooks/use-releases-shows-data"

const defaultTitle = "Releases"
const defaultEmpty = "No releases yet"

const Releases = ({
  children,
  releases,
  title = defaultTitle,
  empty = defaultEmpty,
}) => {
  // `releases` props is now optional; the fallback/default data comes from `useReleasesShowsData` hook.
  const yamlReleases = useReleasesShowsData().releases
  const renderReleases = releases || yamlReleases
  return (
    <LandingSection title={title}>
      {children || ""}
      {renderReleases.length > 0 ? (
        <Grid gap={2} columns={[2, null, 4]}>
          {renderReleases.map(node => {
            return (
              <article key={node.id}>
                asdsadas
                {/* <ReleaseItem {...node} /> */}
              </article>
            )
          })}
        </Grid>
      ) : (
        <div sx={{ variant: "components.landing.empty" }}>{empty || ""}</div>
      )}
    </LandingSection>
  )
}

export default Releases

Releases.propTypes = {
  children: PropTypes.any,
  releases: PropTypes.any,
  title: PropTypes.string, // required; default value passed in argument
  empty: PropTypes.string,
}
