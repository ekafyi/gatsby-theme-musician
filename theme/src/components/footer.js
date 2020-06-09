/** @jsx jsx */
import { Fragment } from "react"
import { jsx } from "theme-ui"
import Social from "./social"
import useMusicianConfig from "../hooks/use-musician-config"

// Text to shadow
import FooterCreditsText from "../texts/footer-credits"
import FooterSocialText from "../texts/footer-social"

export default () => {
  const { social } = useMusicianConfig()

  let hasSocial = false
  if (social.length) {
    if (typeof social[0].name !== "undefined") {
      if (social[0].name.length) {
        hasSocial = true
      }
    }
  }

  return (
    <footer role="contentinfo" sx={{ variant: "components.footer" }}>
      {hasSocial && (
        <Fragment>
          <FooterSocialText />
          <div sx={{ variant: "components.footer.socialWrapper" }}>
            <Social />
          </div>
        </Fragment>
      )}
      <hr sx={{ variant: "components.footer.hr" }} />
      <FooterCreditsText />
    </footer>
  )
}
