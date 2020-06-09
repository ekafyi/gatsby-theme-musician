export default {
  caps: {
    textTransform: "uppercase",
    letterSpacing: "0.1em",
  },
  subheading: {
    color: "muted",
    fontSize: 1,
    a: {
      fontWeight: 700,
      color: "currentColor",
      "&:hover": {
        color: "primary",
      },
    },
  },
  date: {
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
}
