import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import MdxWrapper from "../components/mdx-wrapper"

const LandingTemplate = ({ location, pageContext }) => {
  const data = useStaticQuery(landingQuery)
  const shows = data.shows.nodes
  const releases = data.releases.nodes

  return (
    <MdxWrapper>
      <MDXRenderer
        location={location}
        shows={shows}
        releases={releases}
        isBasePath
      >
        {data.mdx.body}
      </MDXRenderer>
    </MdxWrapper>
  )
}

const landingQuery = graphql`
  query LandingQuery {
    mdx(fileAbsolutePath: { regex: "/artist-landing-page.mdx/" }) {
      excerpt
      body
    }
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
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
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

export default LandingTemplate
