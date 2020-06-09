export const showItemSpacing = [3, null, 4]
export const showDateBoxSize = [72, null, 90]

export default {
  py: 3,
  borderBottom: "2px solid",
  "&:first-of-type": {
    borderTop: "2px solid",
  },
  display: "flex",
  date: {
    // flexBasis: spacing.showDateBoxSize,
    flexShrink: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // height: spacing.showDateBoxSize,
    // width: spacing.showDateBoxSize,
    // mr: spacing.showItemSpacing,
    p: 3,
    textAlign: "center",
    borderRadius: 2,
    background: "accent",
    color: "background",
    lineHeight: 1.125,
    month: {
      fontSize: 2,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
    },
    day: {
      fontSize: 5,
      fontWeight: 700,
      letterSpacing: "0.02em",
      mb: -1,
    },
  },
  colWrapper: {
    flexGrow: 1,
    display: "flex",
    flexWrap: "wrap",
  },
  desc: {
    flexBasis: "14rem",
    flexGrow: "999",
    mb: [2, 3],
    // pr: spacing.showItemSpacing,
  },
  rsvpLink: {
    flexBasis: "calc(9rem + 2vw)",
    flexGrow: "1",
    textAlign: "right",
    ">*": {
      width: "100%",
    },
  },
}
