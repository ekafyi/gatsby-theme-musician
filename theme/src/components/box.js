/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react"
import { jsx } from "theme-ui"

let styles = {}

const Box = props => {
  if (props.textAlign) {
    styles = {
      textAlign: props.textAlign,
    }
  }
  return (
    <div id={props.id || null} sx={{ ...styles }}>
      {props.children}
    </div>
  )
}

export default Box
