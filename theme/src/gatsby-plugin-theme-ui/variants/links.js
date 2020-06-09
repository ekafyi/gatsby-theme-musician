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
    display: "inline-block",
    p: 2,
    mx: [1, 2],
    fontSize: [4, 5],
    color: "inherit",
    textDecoration: "none",
    "&:hover": {
      color: "primary",
    },
    svg: {
      fill: "currentColor",
      display: "inline-block",
      verticalAlign: "middle",
    },
  },
}
