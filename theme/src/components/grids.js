/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react"
import { Styled, jsx } from "theme-ui"

export default ({ children, columns = 3, gap = 24, ...props }) => {
  // !TODO make more sophisticated columns props (minmax, array)
  return (
    <Styled.div
      {...props}
      sx={{
        listStyle: "none",
        display: "grid",
        gridTemplateColumns: ["auto", `repeat(${columns}, 1fr)`],
        gridGap: gap,
        p: 0,
        m: 0,
      }}
    >
      {children}
    </Styled.div>
  )
}
