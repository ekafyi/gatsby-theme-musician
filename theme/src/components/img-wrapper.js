/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react"
import { Styled, jsx } from "theme-ui"

export default ({ children, src, ratio = 1, ...props }) => (
  <Styled.div
    {...props}
    sx={{
      width: "100%",
      height: 0,
      pb: ratio * 100 + "%",
      backgroundColor: "bgAccent",
      backgroundImage: src ? `url(${src})` : `none`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {children}
  </Styled.div>
)
