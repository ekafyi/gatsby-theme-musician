const horSpacing = [3, null, 4]
const dateBoxSize = [72, null, 90]

const rsvpFlex = {
  flexBasis: "calc(9rem + 2vw)",
  flexGrow: "1",
}

export default {
  wrapper: {
    py: 3,
    borderBottom: "2px solid",
    "&:first-of-type": {
      borderTop: "2px solid",
    },
  },
  name: {
    m: 0,
    pt: [0, 2],
    pb: [1, 2],
  },
  nameContainer: {
    flex: "1 0",
    flexBasis: "14rem",
    flexGrow: "999",
    mb: [2, 3],
    pr: horSpacing,
  },
  notDate: {
    flex: "1 0",
    flexWrap: "wrap",
  },
  rsvp: {
    alignSelf: "start",
    ...rsvpFlex,
  },
  noRsvp: {
    color: "muted",
    textAlign: "right",
    ...rsvpFlex,
  },
  date: {
    flexBasis: dateBoxSize,
    flexShrink: 0,
    flexDirection: "column",
    justifyContent: "center",
    height: dateBoxSize,
    width: dateBoxSize,
    mr: horSpacing,
    p: 3,
    textAlign: "center",
    borderRadius: 2,
    backgroundColor: "accent",
    color: "background",
    lineHeight: 1.125,
  },
}
