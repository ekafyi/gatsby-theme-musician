import colors from "./colors"
import helpers from "./helpers"
import spacing from "./spacing"
import typography from "./typography"

const elementStyles = {
  root: {
    fontFamily: "body",
    lineHeight: "body",
    background: colors.background,
    color: colors.text,
    main: {
      pt: spacing.headerHeight,
    },
  },
  h1: {
    ...typography.headingStyle,
    fontSize: [6, null, null, 7, 8],
    lineHeight: 1,
  },
  h2: {
    ...typography.headingStyle,
    fontSize: [5, 6],
  },
  h3: {
    ...typography.headingStyle,
    fontSize: 4,
  },
  h4: {
    ...typography.headingStyle,
    fontSize: 3,
  },
  p: {
    mt: 0,
    mb: 4,
  },
  a: {
    color: "inherit",
    "&:hover": {
      color: colors.primary,
    },
  },
  caps: {
    textTransform: "uppercase",
    letterSpacing: "0.1em",
  },
  img: {
    // temp bugfix
    "&.gatsby-resp-image-image": {
      ...helpers.fillEntireContainer,
      m: 0,
      verticalAlign: "middle",
    },
  },
  hr: {
    my: "calc(2rem + 2vw)",
    borderColor: colors.primary,
    borderStyle: "solid",
  },
  small: {
    fontSize: 0,
  },
}

export default elementStyles
