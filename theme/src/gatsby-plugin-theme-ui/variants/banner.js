import helper from "./helper"
import colors from "../colors"
import { getBannerGradient } from "../../utils"

const minHeight = "60vh"
const minHeightMd = "30rem" // Set non-relative min-height for larger screens.
const maxHeight = "75vh" // In larger screens, limit container height rather than use banner image's natural height.
const contentYPadding = "calc(4rem + 4vw)"
const contentYPaddingXl = "6rem" // Set non-relative padding for very large screens.
const contentChildrenBottomMargin = "calc(1rem + 2vw)" // Bottom margin for banner text.
const contentChildrenBottomMarginXl = "2.5rem" // Set non-relative margin for very large screens.

export default {
  wrapper: {
    position: "relative",
    display: "flex",
    minHeight: [minHeight, null, minHeightMd],
    maxHeight: [null, null, maxHeight],
    color: "background",
    backgroundColor: "text",
    fontSize: [3, null, 4],
    textAlign: "center",
    mb: 4,
    p: { mt: 0 },
    // For background overlay
    "&::after": {
      ...helper.fillParent,
      content: '""',
      opacity: 0.7,
      background: getBannerGradient(colors.accent, colors.text),
    },
  },
  hero: {
    flexGrow: 1,
  },
  content: {
    zIndex: 1, // above gradient
    px: 4,
    py: [contentYPadding, null, null, null, contentYPaddingXl],
    alignSelf: "center",
    a: {
      color: "currentColor",
      fontWeight: 700,
    },
    ">*:not(:last-child):not(a)": {
      mb: [
        contentChildrenBottomMargin,
        null,
        null,
        null,
        contentChildrenBottomMarginXl,
      ],
    },
    ">*:last-child": {
      mb: 0,
    },
  },
}
