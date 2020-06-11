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

  const shows = useStaticQuery(query).shows.nodes
  const releases = useStaticQuery(query).releases.nodes
  return { shows, releases }
}

export default useReleasesShowsData
