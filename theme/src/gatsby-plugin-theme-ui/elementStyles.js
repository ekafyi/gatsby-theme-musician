import colors from "./colors"
import helpers from "./helpers"
import spacing from "./spacing"
import typography from "./typography"

const commonUtilityClasses = {
  ".text-center": {
    textAlign: "center",
  },
  ".text-left": {
    textAlign: "left",
  },
  ".text-right": {
    textAlign: "right",
  },
}

const singleImage = {
  display: "block",
  mx: "auto",
}

const elementStyles = {
  root: {
    fontFamily: "body",
    lineHeight: "body",
    background: colors.background,
    color: colors.text,
    main: {
      pt: [spacing.headerHeight[0] * 2, null, spacing.headerHeight[2]],
    },
    // If outside root object, code style does not work for Markdown-formatted content
    code: {
      px: 2,
      py: 1,
      borderRadius: 2,
      verticalAlign: "middle",
      background: colors.bgAccent,
    },
    ...commonUtilityClasses,
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
    ...spacing.markdownElementYSpacing,
  },
  ul: {
    ...spacing.markdownElementYSpacing,
    variant: "textStyles.regularList",
  },
  ol: {
    ...spacing.markdownElementYSpacing,
    variant: "textStyles.regularList",
  },
  li: {
    ">p:not(:only-child):not(:last-child)": {
      mb: 1,
    },
  },
  a: {
    color: "inherit",
    "&:hover": {
      color: colors.primary,
    },
    "&.gtm-button": {
      variant: "textStyles.button",
    },
    "&.gtm-button-primary": {
      variant: "textStyles.button.primary",
    },
    "&.gtm-button-secondary": {
      variant: "textStyles.button.secondary",
    },
    "&.gtm-button-invert": {
      variant: "textStyles.button.invert",
    },
  },
  caps: {
    textTransform: "uppercase",
    letterSpacing: "0.1em",
  },
  img: {
    // Temporary gatsby-image bugfix
    "&.gatsby-resp-image-image": {
      ...helpers.fillEntireContainer,
      m: 0,
      verticalAlign: "middle",
    },
    // end bugfix
    "&:only-of-type": {
      ...singleImage,
      my: 4,
      "& + figcaption": {
        mt: -4,
        pt: 2,
        mx: "auto",
        textAlign: "center",
        maxWidth: "32em",
        fontSize: 1,
        color: "muted",
      },
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
  blockquote: {
    ...spacing.markdownElementYSpacing,
    mx: 0,
    borderLeft: "1rem solid",
    borderLeftColor: colors.accent,
    color: colors.muted,
    py: 3,
    pl: [3, null, 4],
    fontSize: "120%",
    ">*:not(:last-child)": {
      mb: 3,
    },
    ">*:last-child": {
      mb: 0,
    },
    cite: {
      fontSize: 2,
      "&::before": {
        content: '"– "',
        color: colors.primary,
      },
    },
  },
}

export default elementStyles
