import helper from "./helper"

const artworkStyle = {
  borderRadius: 4,
  overflow: "hidden",
}

const gutterMargin = 2
const minWidthWithGutter = "calc(50% - 16px)"

export default {
  // This wrapper uses the technique from https://every-layout.dev/layouts/sidebar/
  wrapper: {
    mx: [gutterMargin * -1, null, null, 0],
    flexWrap: [null, "wrap", null, "unset"],
    flexDirection: [null, null, null, "column"],
    ">*:first-child, >*:last-child": {
      mx: [gutterMargin, null, null, 0],
    },
    ">*:first-child": {
      minWidth: ["8rem"],
      flexBasis: ["35%", "9rem", "calc(9rem + 2vw)", "unset"],
      flexGrow: 1,
    },
    ">*:last-child": {
      flexBasis: 0,
      flexGrow: 999,
      minWidth: minWidthWithGutter,
    },
  },
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
