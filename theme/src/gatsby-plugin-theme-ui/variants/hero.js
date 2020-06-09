import helper from "./helper"

export default {
  wrapper: {
    position: "relative",
    // Enables gradient overlay (in case needed) BUT does not add overlay colour
    "&:after": {
      ...helper.fillParent,
      content: '" "',
    },
  },
  image: {
    ...helper.fillParent,
    zIndex: 0,
    maxHeight: "100vh",
    "&>img": {
      objectFit: "cover",
    },
  },
  content: {
    ...helper.fillParent,
    ...helper.flexCenter,
  },
}
