import colors from "./colors"

const buttonMediumSpacing = {
  px: 3,
  py: 2,
  my: 1,
}

const buttonBasic = {
  border: "2px solid",
  display: "inline-block",
  borderRadius: 2,
  textAlign: "center",
  textDecoration: "none",
  fontWeight: 700,
}

const basicListStyle = {
  pl: 4,
  ">li": {
    pl: 2,
  },
  "ul,ol": {
    mb: 0,
  },
}

const inlineTextListStyle = {
  listStyle: "none",
  p: 0,
  color: "purple",
  li: {
    display: "inline-block",
    mx: 1,
  },
}

/**
 * Typography Variants
 *
 * https://theme-ui.com/guides/variants#typography
 */

const textStyles = {
  buttonBase: {
    ...buttonBasic,
  },
  button: {
    ...buttonBasic,
    ...buttonMediumSpacing,
    color: colors.text,
    "&:hover": {
      color: colors.primary,
    },
    primary: {
      ...buttonBasic,
      ...buttonMediumSpacing,
      color: colors.background,
      background: colors.primary,
      borderColor: colors.primary,
      "&:hover": {
        background: colors.text,
        borderColor: colors.text,
      },
    },
    secondary: {
      ...buttonBasic,
      ...buttonMediumSpacing,
      color: colors.background,
      background: colors.secondary,
      borderColor: colors.secondary,
      "&:hover": {
        background: colors.text,
        borderColor: colors.text,
      },
    },
    invert: {
      ...buttonBasic,
      ...buttonMediumSpacing,
      color: colors.background,
      background: colors.text,
      borderColor: colors.text,
      "&:hover": {
        background: colors.primary,
        borderColor: colors.primary,
      },
    },
  },
  inlineTextList: {
    ...inlineTextListStyle,
  },
  regularList: {
    ...basicListStyle,
  },
  itemSubheading: {
    color: colors.muted,
    fontSize: 1,
  },
  navLink: {
    display: "inline-block",
    color: "inherit",
    textDecoration: "none",
    lineHeight: 1,
    mx: 1,
  },
}

export default textStyles
