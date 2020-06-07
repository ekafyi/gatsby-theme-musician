import React from "react"
import { MDXProvider } from "@mdx-js/react"

import NewLayout from "../components/new-layout"

const components = {
  wrapper: props => <NewLayout {...props} />,
}

export default props => (
  <MDXProvider components={components}>{props.children}</MDXProvider>
)
