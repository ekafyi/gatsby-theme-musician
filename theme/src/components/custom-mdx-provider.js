import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { Box, Button, Container, Flex, Grid } from "theme-ui"

import Layout from "./layout"
import MdxLink from "../components/mdx-link"

const components = {
  // Theme UI Components
  Box,
  Button,
  Container,
  Flex,
  Grid,
  //
  wrapper: props => <Layout {...props} />,
  a: props => <MdxLink {...props} />,
}

export default props => (
  <MDXProvider components={components}>{props.children}</MDXProvider>
)
