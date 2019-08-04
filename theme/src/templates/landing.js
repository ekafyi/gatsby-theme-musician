/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { jsx } from "theme-ui"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import LandingSectionTitle from "../components/landing-section-title"
import {
  Banner,
  Container,
  FullWidthContainer,
  Grids,
  Releases,
  Shows,
  Social,
  Youtube,
} from "../components"

const shortcodes = {
  Banner,
  Container,
  FullWidthContainer,
  Grids,
  Releases,
  Shows,
  Social,
  Youtube,
}

const LandingTemplate = ({ location }) => {
  const data = useStaticQuery(landingQuery)
  const shows = data.shows.nodes
  const releases = data.releases.nodes

  return (
    <MDXProvider
      components={{
        ...shortcodes,
        h2: props => <LandingSectionTitle {...props} />,
      }}
    >
      <MDXRenderer location={location} shows={shows} releases={releases}>
        {data.mdx.body}
      </MDXRenderer>
    </MDXProvider>
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
