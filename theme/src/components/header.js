/** @jsx jsx */
import { Container, jsx } from "theme-ui"
import HomeLink from "./home-link"
import Nav from "./nav"

export default ({ isBasePath }) => {
  return (
    <header role="banner" sx={{ variant: "components.header.wrapper" }}>
      <Container sx={{ variant: "components.header.wrapper.inner" }}>
        <HomeLink
          isBasePath={isBasePath}
          sx={{ variant: "components.header.home" }}
        />
        <Nav
          isBasePath={isBasePath}
          sx={{ variant: "components.header.nav" }}
        />
      </Container>
    </header>
  )
}
