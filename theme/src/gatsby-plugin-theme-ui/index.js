import breakpoints from "./breakpoints"
import colors from "./colors"
import componentStyles from "./componentStyles"
import elementStyles from "./elementStyles"
// import helpers from "./helpers"
import layoutStyles from "./layoutStyles"
// import spacing from "./spacing"
import textStyles from "./textStyles"
import typography from "./typography"

/**
 * Theme Specification
 *
 * https://theme-ui.com/theme-spec
 */

const theme = {
  // Colors

  initialColorMode: `light`,
  useCustomProperties: true,
  colors: {
    ...colors,
  },

  // Typography & Text

  ...typography,
  textStyles,

  // Element Styles

  styles: {
    ...elementStyles,
  },

  // Breakpoints

  breakpoints: breakpoints,

  /**
   * Non-Typography Variants
   *
   * We can use any key name as long as they are
   * referenced correctly from the component.
   */

  layout: { ...layoutStyles },
  components: { ...componentStyles },
}

export default theme
