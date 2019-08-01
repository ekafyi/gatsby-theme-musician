import colors from "./colors"
import helpers from "./helpers"
import spacing from "./spacing"
import textStyles from "./textStyles"

// !TODO refactor styles into component code?
// https://github.com/system-ui/theme-ui/issues/256

const bannerComponentStyle = {
  display: "flex",
  minHeight: ["60vh", null, 400],
  position: "relative",
  textAlign: "center",
  background: colors.text,
  fontSize: [3, null, 4],
  p: { mt: 0 },
  mt: spacing.headerHeight, // if header is fixed position
  "*": {
    color: colors.background,
  },
  ".GtmBanner__content-wrapper": {
    zIndex: 1, // above gradient
    px: 4,
    py: ["calc(4rem + 4vw)", null, null, null, 6],
    ">*:not(:last-child):not(a)": {
      mb: ["calc(1rem + 2vw)", null, null, null, 5],
    },
    ">*:last-child": {
      mb: 0,
    },
    "a:not(.GtmSocialItem)": {
      ...textStyles.buttonBase,
      color: colors.background,
      border: "2px solid",
      px: 4,
      py: 3,
      mx: 2,
      mb: [2, null, 0],
      fontSize: 2,
      "&:hover": {
        background: colors.text,
      },
    },
  },
  "&::after": {
    ...helpers.fillEntireContainer,
    content: '" "',
    opacity: 0.7,
    background: colors.bgGradient,
  },
  // ".GtmBanner__hero-wrapper::after": {
  //   opacity: 0.7,
  //   background: colors.bgGradient
  // }
}

const heroImgComponentStyle = {
  parent: {
    position: "relative",
    // Enables gradient overlay (in case needed) BUT does not add overlay colour
    "&:after": {
      ...helpers.fillEntireContainer,
      content: '" "',
    },
  },
  gatsbyImg: {
    ...helpers.fillEntireContainer,
    zIndex: 0,
    maxHeight: "100vh",
    "&>img": {
      objectFit: "cover",
      objectPosition: "0% 0%",
      fontFamily:
        "object-fit: cover !important; object-position: 0% 0% !important",
    },
  },
  content: {
    ...helpers.fillEntireContainer,
    ...helpers.flexCenterXY,
  },
}

const showComponentStyle = {
  py: 3,
  borderBottom: "2px solid",
  "&:first-of-type": {
    borderTop: "2px solid",
  },
  display: "flex",
  date: {
    flexBasis: spacing.showDateBoxSize,
    flexShrink: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: spacing.showDateBoxSize,
    width: spacing.showDateBoxSize,
    mr: spacing.showItemSpacing,
    p: 3,
    textAlign: "center",
    borderRadius: 2,
    background: colors.accent,
    color: colors.background,
    lineHeight: 1.125,
    month: {
      fontSize: 2,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
    },
    day: {
      fontSize: 5,
      fontWeight: 700,
      letterSpacing: "0.02em",
      mb: -1,
    },
  },
  colWrapper: {
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap",
  },
  desc: {
    flexBasis: "14rem",
    flexGrow: "999",
    mb: [2, 3],
    pr: spacing.showItemSpacing,
  },
  rsvpLink: {
    flexBasis: "calc(9rem + 2vw)",
    flexGrow: "1",
    textAlign: "right",
    ">*": {
      width: "100%",
    },
  },
}

const componentStyles = {
  banner: { ...bannerComponentStyle },
  heroImg: { ...heroImgComponentStyle },
  show: { ...showComponentStyle },
}

export default componentStyles
