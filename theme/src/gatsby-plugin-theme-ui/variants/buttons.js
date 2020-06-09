const mediumSpacing = {
  px: 3,
  py: 2,
  my: 1,
}

const basicStyles = {
  border: "2px solid",
  display: "inline-block",
  borderRadius: 2,
  textAlign: "center",
  textDecoration: "none",
  fontWeight: 700,
}

export default {
  regular: {
    ...basicStyles,
    ...mediumSpacing,
    color: "text",
    "&:hover": {
      color: "primary",
    },
  },
  primary: {
    ...basicStyles,
    ...mediumSpacing,
    color: "background",
    backgroundColor: "primary",
    borderColor: "primary",
    "&:hover": {
      backgroundColor: "text",
      borderColor: "text",
    },
  },
  secondary: {
    ...basicStyles,
    ...mediumSpacing,
    color: "background",
    backgroundColor: "secondary",
    borderColor: "secondary",
    "&:hover": {
      backgroundColor: "text",
      borderColor: "text",
    },
  },
  invert: {
    ...basicStyles,
    ...mediumSpacing,
    color: "background",
    backgroundColor: "text",
    borderColor: "text",
    "&:hover": {
      backgroundColor: "primary",
      borderColor: "primary",
    },
  },
}
