import sizes from "../sizes"

export default {
  // Default Container component. Meanwhile, max-width is defined in theme.sizes.container.
  // https://theme-ui.com/components/container
  container: {},
  //
  main: {
    // Use imported value because we do custom calculation outside of theme-ui's structure
    pt: [sizes.headerHeight[0] * 2, null, sizes.headerHeight[2]],
  },
}
