import { graphql, useStaticQuery } from "gatsby"

const useSiteMetadata = () => {
  const query = graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `

  return useStaticQuery(query)
}

export default useSiteMetadata
