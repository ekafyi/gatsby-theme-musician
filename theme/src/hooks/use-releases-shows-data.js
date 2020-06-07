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
          # image
          links {
            name
            url
          }
        }
      }
    }
  `

  const data = useStaticQuery(query)
  return data
}

export default useReleasesShowsData
