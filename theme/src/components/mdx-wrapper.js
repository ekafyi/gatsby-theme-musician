import React from "react"
import { MDXProvider } from "@mdx-js/react"

import LandingSectionTitle from "../components/landing-section-title"
import Layout from "../components/layout"
import MdxLink from "../components/mdx-link"

import {
  Banner,
  Container,
  Grids,
  Releases,
  Shows,
  Social,
  Youtube,
} from "../components"

const shortcodes = {
  Banner,
  Container,
  Grids,
  Releases,
  Shows,
  Social,
  Youtube,
  // Default wrapper
  wrapper: props => <Layout {...props} />,
  // Render h2 element with custom component
  h2: props => <LandingSectionTitle {...props} />,
  a: props => <MdxLink {...props} />,
}

const MdxWrapper = props => {
  return (
    <MDXProvider components={{ ...shortcodes }}>{props.children}</MDXProvider>
  )
}

export default MdxWrapper
