import helper from "./variants/helper"

const commonYSpacing = {
  mt: 0,
  mb: ["calc(1rem + 1vw)", null, null, null, 4],
}

const headingStyles = {
  fontFamily: "heading",
  lineHeight: "heading",
  fontWeight: "heading",
  mt: 0,
}

const globalStyles = {
  "*": {
    boxSizing: "border-box",
  },
  iframe: {
    maxWidth: "100%",
  },
  img: {
    maxWidth: "100%",
    height: "auto",
  },
}

const anchorClasses = {
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
    // // to confirm the style works
    // backgroundColor: "text",
    // color: "background",
  },
}

const utilityClasses = {
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

const temporaryClasses = {
  // Temporary gatsby-image bugfix
  "img.gatsby-resp-image-image": {
    ...helper.fillParent,
    margin: 0,
    verticalAlign: "middle",
  },
}

// Bad practice, minimize this kind of usage.
// https://github.com/system-ui/theme-ui/issues/648
const rootElements = {
  ...globalStyles,
  ...utilityClasses,
  ...temporaryClasses,
}

// = = =

export default {
  root: {
    margin: 0,
    fontFamily: "body",
    lineHeight: "body",
    backgroundColor: "background",
    color: "text",
    ...rootElements,
  },
  h1: {
    ...headingStyles,
    fontSize: [6, null, null, 7, 8],
    lineHeight: 1,
  },
  h2: {
    ...headingStyles,
    fontSize: [5, 6],
  },
  h3: {
    ...headingStyles,
    fontSize: 4,
  },
  h4: {
    ...headingStyles,
    fontSize: 3,
  },
  a: {
    color: "primary",
    "&:hover": {
      color: "text",
    },
    ...anchorClasses,
  },
  blockquote: {
    ...commonYSpacing,
    mx: 0,
    borderLeft: "1rem solid",
    borderLeftColor: "accent",
    color: "muted",
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
        color: "primary",
      },
    },
  },
  code: {
    px: 2,
    py: 1,
    borderRadius: 2,
    verticalAlign: "middle",
    backgroundColor: "bgAccent",
  },
  hr: {
    my: "calc(2rem + 2vw)",
    borderColor: "primary",
    borderStyle: "solid",
  },
  iframe: {
    maxWidth: "100%",
  },
  img: {
    maxWidth: "100%",
    height: "auto",
    "&:only-of-type": {
      display: "block",
      mx: "auto",
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
  li: {
    ">p:not(:only-child):not(:last-child)": {
      mb: 1,
    },
  },
  ol: {
    ...commonYSpacing,
    variant: "list.regular",
  },
  p: {
    ...commonYSpacing,
  },
  small: {
    fontSize: 0,
  },
  ul: {
    ...commonYSpacing,
    variant: "list.regular",
  },
}
