/**
 * We can use any variant property keys/names, but some are used by Theme UI's components.
 * Refer to @types/theme-ui__components OR https://theme-ui.com/components/variants
 */

// Components
import banner from "./banner"
import footer from "./footer"
import header from "./header"
import heroImg from "./hero-img"
import landingSection from "./landing-section"
import showItem from "./show-item"

// Shared/Utility
import buttons from "./buttons"
import helper from "./helper"
import layout from "./layout"
import links from "./links"
import list from "./list"
import text from "./text"

// = = =

export default {
  components: {
    banner,
    footer,
    header,
    heroImg,
    landingSection,
    showItem,
  },

  // Shared/Utility
  buttons,
  helper,
  layout,
  links,
  list,
  text,
}
