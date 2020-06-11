import { graphql, useStaticQuery } from "gatsby"

const useSiteMetadata = () => {
  const query = graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
          siteLanguage
        }
      }
    }
  `
  return useStaticQuery(query).site.siteMetadata
}

export default useSiteMetadata
