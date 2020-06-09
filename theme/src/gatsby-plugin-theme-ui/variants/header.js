import sizes from "../sizes"

export default {
  backgroundColor: "bgOpaque",
  color: "text",
  lineHeight: 0, // fix gap bug
  minHeight: sizes.headerHeight,
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
  customChild: {
    lineHeight: [
      `${sizes.headerHeight[0]}px`,
      null,
      `${sizes.headerHeight[2]}px`,
    ],
  },
  link: {
    // ...textStyles.navLink, // replace with variant: links.nav
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    fontSize: [0, 0, 1],
    height: sizes.headerHeight,
    lineHeight: ["48px", null, "60px"],
    px: [2, null, 3],
    mx: 0,
    "&:hover": {
      color: "primary",
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
  //     color: "background",
  //     backgroundColor: "text"
  //   }
  // }
}
