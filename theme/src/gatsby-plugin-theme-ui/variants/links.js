import sizes from "../sizes"

const buttonishStyle = {
  display: "inline-block",
  textDecoration: "none",
  "&:hover": {
    color: "primary",
  },
}

const navLinkCommon = {
  textDecoration: "none",
  color: "currentColor",
  display: "inline-block",
}

export default {
  // 🍅 use for testing
  tomato: {
    color: "tomato",
    fontWeight: 700,
    px: 3,
    py: 2,
    display: "inline-block",
  },
  //
  nav: {
    display: "inline-block",
    color: "inherit",
    textDecoration: "none",
    lineHeight: 1,
    mx: 1,
  },
  icon: {
    color: "inherit",
    p: 2,
    mx: [1, 2],
    fontSize: [4, 5],
    svg: {
      fill: "currentColor",
      display: "inline-block",
      verticalAlign: "middle",
    },
    ...buttonishStyle,
  },
  listen: {
    color: "text",
    p: 1,
    fontWeight: 700,
    svg: {
      verticalAlign: "middle",
      marginTop: -1,
    },
    ...buttonishStyle,
  },
  header: {
    home: {
      ...navLinkCommon,
      fontSize: 3,
      fontWeight: 700,
      mr: [0, null, 3],
      pt: [2, null, 0],
      whiteSpace: "nowrap",
      img: {
        top: ["12px !important", null, "8px !important"],
        bottom: ["4px !important", null, "8px !important"],
        height: "calc(100% - 16px) !important",
        objectFit: "contain !important",
      },
    },
    nav: {
      ...navLinkCommon,
      fontSize: 1,
      lineHeight: 2,
      px: sizes.navMenuXSpacing,
      py: 2,
      flex: "0 0 auto",
      whiteSpace: "nowrap",
      letterSpacing: "0.01em",
      borderRadius: 2,
      "&:hover": {
        textDecoration: "underline",
      },
      "&.is-active, &:active, &:focus": {
        backgroundColor: "navBgActive",
      },
    },
  },
}
