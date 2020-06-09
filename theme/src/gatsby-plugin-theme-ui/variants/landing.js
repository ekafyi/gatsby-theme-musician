export const landingSectionSpacing = [
  5,
  null,
  "calc(3rem + 4vw)",
  null,
  null,
  5,
]

export default {
  section: {
    // border: "4px dotted tomato", // Use for testing
    // borderRadius: 8,
    py: landingSectionSpacing,
    "& + &": {
      pt: 0,
    },
    "& + hr": {
      mt: 0,
    },
    "hr + &": {
      mt: "calc(-2rem - 2vw)",
    },
  },
  sectionTitle: {
    mb: [4, 5],
    textAlign: "center",
  },
  empty: {
    textAlign: "center",
    color: "muted",
  },
}
