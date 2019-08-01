import colors from "./colors"

const basicButtonStyle = {
  display: "inline-block",
  borderRadius: 2,
  textAlign: "center",
  textDecoration: "none",
  fontWeight: 700,
}

const inlineTextListStyle = {
  listStyle: "none",
  p: 0,
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
    ...basicButtonStyle,
  },
  button: {
    ...basicButtonStyle,
    py: 2,
    px: 3,
    border: "2px solid",
    color: colors.text,
    "&:hover": {
      color: colors.primary,
    },
  },
  inlineTextList: {
    ...inlineTextListStyle,
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
