import helper from "./helper"

export default {
  display: "flex",
  minHeight: ["60vh", null, 400],
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
    ">*:not(:last-child):not(a)": {
      mb: ["calc(1rem + 2vw)", null, null, null, 5],
    },
    ">*:last-child": {
      mb: 0,
    },
    "a:not(.GtmSocialItem)": {
      // ...textStyles.buttonBase, // replace with variants: buttons.regular
      color: "background",
      px: 4,
      py: 3,
      mx: 2,
      mb: [2, null, 0],
      fontSize: 2,
      "&:hover": {
        backgroundColor: "text",
      },
    },
  },
  "&::after": {
    ...helper.fillParent,
    content: '" "',
    opacity: 0.7,
    backgroundColor: "bgGradient",
  },
  // ".GtmBanner__hero-wrapper::after": {
  //   opacity: 0.7,
  //   background: colors.bgGradient
  // }
}
