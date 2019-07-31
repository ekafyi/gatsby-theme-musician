/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react"
import { Styled, jsx } from "theme-ui"

const LandingSectionTitle = props => {
  return (
    <Styled.h2 sx={{ variant: "textStyles.landingSectionTitle" }}>
      {props.children}
    </Styled.h2>
  )
}

export default LandingSectionTitle
