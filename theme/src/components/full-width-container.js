/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react"
import { Styled, jsx } from "theme-ui"

const FullWidthContainer = props => {
  return (
    <Styled.div
      {...props}
      sx={{
        ".gatsby-resp-image-wrapper": {
          maxWidth: "100% !important",
        },
      }}
    >
      {props.children}
    </Styled.div>
  )
}

export default FullWidthContainer
