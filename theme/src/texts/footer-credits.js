/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import useSiteMetadata from "../hooks/use-site-metadata"

export default () => {
  const { title } = useSiteMetadata()
  return (
    <small sx={{ variant: "components.footer.copyright" }}>
      Copyright © {new Date().getFullYear()} {title}. All rights reserved.
      <br />
      Built with{" "}
      <Styled.a href="https://gatsbyjs.org" rel="external nofollow">
        Gatsby
      </Styled.a>{" "}
      and{" "}
      <Styled.a
        href="https://www.npmjs.com/package/gatsby-theme-musician"
        rel="external nofollow"
      >
        gatsby-theme-musician
      </Styled.a>
      .
    </small>
  )
}
