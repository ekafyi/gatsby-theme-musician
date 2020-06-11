import sizes from "../sizes"

export default {
  // Default Container component. Meanwhile, max-width is defined in theme.sizes.container.
  // https://theme-ui.com/components/container
  container: {
    px: [2, 4],
    py: ["1.5rem", 4],
  },
  //
  main: {
    wordWrap: "break-word",
    // Use imported value because we do custom calculation outside of theme-ui's structure
    pt: [sizes.navbarHeight * 2, null, sizes.navbarHeight],
  },
}
