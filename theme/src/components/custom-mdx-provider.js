import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { Box, Button, Container, Flex, Grid } from "theme-ui"

import { Banner, Layout, MdxLink, Releases, Shows, Social } from "../components"

const components = {
  // Theme UI Components
  Box,
  Button,
  Container,
  Flex,
  Grid,
  // Local components
  Banner,
  Releases,
  Shows,
  Social,
  //
  wrapper: props => <Layout {...props} />,
  a: props => <MdxLink {...props} />,
}

export default props => (
  <MDXProvider components={components}>{props.children}</MDXProvider>
)
