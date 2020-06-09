import helper from "./helper"

const artworkStyle = {
  borderRadius: 4,
  overflow: "hidden",
}

export default {
  wrapper: {},
  image: {
    ...artworkStyle,
  },
  noImage: {
    color: "muted",
    backgroundColor: "bgAccent",
    height: "100%",
    fontSize: 1,
    fontWeight: 700,
    ...helper.flexCenter,
    ...artworkStyle,
  },
  title: { mb: 0, mt: 2, fontSize: 3 },
  links: {
    fontSize: 1,
    mt: 2,
    ul: {
      lineHeight: 1.6,
      ml: -1,
    },
  },
}
