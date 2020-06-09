const buttonishStyle = {
  display: "inline-block",
  textDecoration: "none",
  "&:hover": {
    color: "primary",
  },
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
}
