import { graphql, useStaticQuery } from "gatsby"

const useReleasesShowsData = () => {
  const query = graphql`
    query ReleasesShowsQuery {
      shows: allShowsYaml(sort: { fields: date, order: ASC }) {
        nodes {
          id
          name
          date
          location
          info_url
          map_url
        }
      }
      releases: allReleasesYaml(sort: { fields: date, order: DESC }) {
        nodes {
          id
          title
          date
          release_type
          image {
            childImageSharp {
              fluid(maxWidth: 300, maxHeight: 300) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          links {
            name
            url
          }
        }
      }
    }
  `
  const data = useStaticQuery(query)
  const shows = data.shows.nodes
  const releases = data.releases.nodes
  return { shows, releases }
}

export default useReleasesShowsData
