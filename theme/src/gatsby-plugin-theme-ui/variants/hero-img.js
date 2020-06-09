import helper from "./helper"

export default {
  parent: {
    position: "relative",
    // Enables gradient overlay (in case needed) BUT does not add overlay colour
    "&:after": {
      ...helper.fillParent,
      content: '" "',
    },
  },
  gatsbyImg: {
    ...helper.fillParent,
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
    ...helper.fillParent,
    ...helper.flexCenter,
  },
}
