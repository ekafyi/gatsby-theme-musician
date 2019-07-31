const // Colors
  colors = {
    text: "#111",
    background: "#fff",
    primary: "#07c",
    secondary: "#05a",
    accent: "#07c",
    muted: "#737373",

    // Additional colour values (can be any key)
    bgAccent: "rgba(0,0,0,0.1)",
    bgOpaque: "rgba(255,255,255,0.9)",
  }
// Landing page
const headerHeight = [48, null, 60]
const landingSectionSpacing = [5, null, "calc(3rem + 3.5vw)", null, null, 5]
const showItemSpacing = [3, null, 4]
const showDateBoxSize = [72, null, 90]

colors.bgGradient = `linear-gradient(150deg, ${colors.accent} 10%, ${
  colors.text
} 60%, ${colors.text} 100%)`

// linear-gradient(150deg, red 15%, black 75%, black 100%)

const heading = {
  fontFamily: "heading",
  lineHeight: "heading",
  fontWeight: "heading",
  mt: 0,
}

// Helpers

const flexCenterXY = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

const fillEntireContainer = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
}

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

const navLinkStyle = {
  display: "inline-block",
  color: "inherit",
  textDecoration: "none",
  lineHeight: 1,
  mx: 1,
}

// Theme Specification
// https://theme-ui.com/theme-spec

export const theme = {
  /* 
    Colors
   */

  initialColorMode: `light`,
  useCustomProperties: true,
  colors: {
    ...colors,
  },

  /* 
    Typography
   */
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
  },
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
  // Variants -> Typography
  // https://theme-ui.com/guides/variants#typography
  textStyles: {
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
    itemSubheading: {
      color: colors.muted,
      fontSize: 1,
    },
    landingSectionTitle: {
      textAlign: "center",
      mt: 0,
      mb: [4, 5],
    },
    navLink: {
      ...navLinkStyle,
    },
  },

  /* 
    Styles
   */

  styles: {
    // !TODO bug body style does not work
    root: {
      fontFamily: "body",
      lineHeight: "body",
      background: colors.background,
      color: colors.text,
    },
    h1: {
      ...heading,
      fontSize: [6, null, null, 7, 8],
      lineHeight: 1,
    },
    h2: {
      ...heading,
      fontSize: [5, 6],
    },
    h3: {
      ...heading,
      fontSize: 4,
    },
    h4: {
      ...heading,
      fontSize: 3,
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
        ...fillEntireContainer,
        m: 0,
        verticalAlign: "middle",
      },
    },
    hr: {
      my: "calc(2rem + 2vw)",
      borderColor: colors.primary,
      borderStyle: "solid",
    },
    ul: {
      "&.Gtm-u-inline-text-list": {
        ...inlineTextListStyle,
      },
    },
    ol: {
      "&.Gtm-u-inline-text-list": {
        ...inlineTextListStyle,
      },
    },
    small: {
      fontSize: 0,
    },
  },

  /* 
    Non-Text Variants
   */

  layout: {
    header: {
      background: colors.bgOpaque,
      color: colors.text,
      lineHeight: 0, // fix gap bug
      minHeight: headerHeight,
      textAlign: ["center", null, "initial"],
      // fixed position
      position: "fixed",
      width: "100%",
      top: 0,
      zIndex: 2,
      // end fixed position
      container: {
        py: 0,
        display: "flex",
        flexDirection: ["column", null, "row"],
        alignItems: "center",
        justifyContent: "space-between",
      },
      link: {
        ...navLinkStyle,
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        fontSize: [0, 0, 1],
        height: headerHeight,
        lineHeight: ["48px", null, "60px"],
        px: [2, null, 3],
        mx: 0,
        "&:hover": {
          color: colors.primary,
        },
      },
      homeLink: {
        fontSize: "1em",
        fontWeight: 700,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        flexGrow: 1,
        flexBasis: ["auto", null, 0],
      },
      // iconLink: {
      //   borderRadius: "50%",
      //   mx: [1, 1, 1],
      //   "&:hover": {
      //     color: colors.background,
      //     background: colors.text
      //   }
      // }
    },
    footer: {
      textAlign: "center",
      copyright: {
        display: "block",
        px: 3,
        py: [3, 4],
        mt: 3,
        color: "muted",
      },
      hr: {
        width: 40,
        mx: "auto",
        mt: [4, 5],
        mb: 0,
        border: "2px solid",
        borderColor: "bgAccent",
      },
      ".GtmFooter__social-heading": {
        display: "inline-block",
        fontSize: 1,
        mb: 3,
      },
      ".GtmFooter__social-wrapper": {
        px: 3,
      },
    },
    landingSection: {
      py: landingSectionSpacing,
      "& + hr": {
        mt: 0,
      },
      "hr + &": {
        mt: "calc(-2rem - 2vw)",
      },
    },
  },
  components: {
    banner: {
      display: "flex",
      minHeight: ["60vh", null, 400],
      position: "relative",
      textAlign: "center",
      background: colors.text,
      fontSize: [3, null, 4],
      p: { mt: 0 },
      mt: headerHeight, // if header is fixed position
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
          ...basicButtonStyle,
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
        ...fillEntireContainer,
        content: '" "',
        opacity: 0.7,
        background: colors.bgGradient,
      },
      // ".GtmBanner__hero-wrapper::after": {
      //   opacity: 0.7,
      //   background: colors.bgGradient
      // }
    },
    heroImg: {
      parent: {
        position: "relative",
        // Enables gradient overlay (in case needed) BUT does not add overlay colour
        "&:after": {
          ...fillEntireContainer,
          content: '" "',
        },
      },
      gatsbyImg: {
        ...fillEntireContainer,
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
        ...fillEntireContainer,
        ...flexCenterXY,
      },
    },
    show: {
      py: 3,
      borderBottom: "2px solid",
      "&:first-of-type": {
        borderTop: "2px solid",
      },
      display: "flex",
      date: {
        flexBasis: showDateBoxSize,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: showDateBoxSize,
        width: showDateBoxSize,
        mr: showItemSpacing,
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
        pr: showItemSpacing,
      },
      rsvpLink: {
        flexBasis: "calc(9rem + 2vw)",
        flexGrow: "1",
        textAlign: "right",
        ">*": {
          width: "100%",
        },
      },
    },
  },

  /* 
    Breakpoints
   */

  breakpoints: [
    "26em", // 384x
    "45em", // 640px
    "64em", // 1024px
    "90em", // 1440px
    "120em", // 1920px
  ],
}

export default theme
