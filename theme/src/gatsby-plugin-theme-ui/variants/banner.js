import helper from "./helper"

export default {
  display: "flex",
  minHeight: ["60vh", null, 400],
  maxHeight: [null, null, "75vh"],
  position: "relative",
  textAlign: "center",
  backgroundColor: "text",
  fontSize: [3, null, 4],
  p: { mt: 0 },
  mb: 4,
  color: "background",
  ".GtmBanner__content-wrapper": {
    zIndex: 1, // above gradient
    px: 4,
    py: ["calc(4rem + 4vw)", null, null, null, 6],
    alignSelf: "center",
    ">*:not(:last-child):not(a)": {
      mb: ["calc(1rem + 2vw)", null, null, null, 5],
    },
    ">*:last-child": {
      mb: 0,
    },
    a: {
      color: "currentColor",
      fontWeight: 700,
    },
  },
  "&::after": {
    ...helper.fillParent,
    content: '" "',
    opacity: 0.7,
    backgroundColor: "bgGradient",
  },
  ".GtmBanner__hero-wrapper": {
    flexGrow: 1,
  },
  ".GtmBanner__hero-wrapper::after": {
    opacity: 0.7,
    backgroundColor: "bgGradient",
  },
}
