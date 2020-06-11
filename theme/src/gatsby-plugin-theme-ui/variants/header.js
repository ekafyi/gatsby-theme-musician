import sizes from "../sizes"
import helper from "./helper"

const sideScroll = {
  display: "flex",
  flexWrap: "nowrap",
  overflowX: "auto",
  "-webkit-overflow-scrolling": "touch",
  "-ms-overflow-style": "-ms-autohiding-scrollbar",
}

const headerCol = {
  height: "navbarHeight",
  alignItems: "center",
}

export default {
  wrapper: {
    ...helper.fixed,
    zIndex: 3,
    lineHeight: 1,
    color: "navText",
    backgroundColor: "navBg",
    inner: {
      px: [0, null, 4],
      py: [0, 0], // override default Container style (variants.layout)
      display: "flex",
      flexDirection: ["column", null, "row"],
      alignItems: ["center", null, "unset"],
      justifyContent: "space-between",
    },
  },
  home: {
    ...headerCol,
    display: "flex",
  },
  nav: {
    ...headerCol,
    ...sideScroll,
    maxWidth: "100%",
    mr: [null, null, `calc(-1 * ${sizes.navMenuXSpacing})`],
  },
}
