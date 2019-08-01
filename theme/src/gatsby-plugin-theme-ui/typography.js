const headingStyle = {
  fontFamily: "heading",
  lineHeight: "heading",
  fontWeight: "heading",
  mt: 0,
}

const fontFamily = {
  body: "system-ui, sans-serif",
  heading: "system-ui, sans-serif",
}

const typography = {
  headingStyle,
  fonts: fontFamily,
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72, 90, 120],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.4,
    heading: 1.125,
  },
}

export default typography
