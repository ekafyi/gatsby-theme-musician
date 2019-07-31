/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react"
import { Container as ThemeContainer, jsx } from "theme-ui"

const Container = props => {
  return <ThemeContainer {...props}>{props.children}</ThemeContainer>
}

export default Container
