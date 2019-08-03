const bodyFontFamily = `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
  "Oxygen", "Ubuntu", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
  "Segoe UI Emoji", "Segoe UI Symbol"`
const headingFontFamily = `inherit`

const typography = {
  headingStyle: {
    fontFamily: "heading",
    lineHeight: "heading",
    fontWeight: "heading",
    mt: 0,
  },
  fonts: {
    body: bodyFontFamily,
    heading: headingFontFamily,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72, 90, 120],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
}

export default typography
