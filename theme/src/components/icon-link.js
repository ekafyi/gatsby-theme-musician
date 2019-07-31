/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react"
import { Styled, jsx } from "theme-ui"

export default props => (
  <Styled.a
    {...props}
    sx={{
      display: "inline-block",
      p: 2,
      mx: [1, 2],
      color: "inherit",
      textDecoration: "none",
      "&:hover": {
        color: "primary",
      },
      "& > svg": {
        display: "inline-block",
        verticalAlign: "middle",
      },
    }}
  />
)
