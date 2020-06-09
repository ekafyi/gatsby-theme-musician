/** @jsx jsx */
import { Container, jsx } from "theme-ui"
import HomeLink from "./home-link"
import Nav from "./nav"

export default ({ isBasePath }) => {
  return (
    <header role="banner">
      <Container>
        <HomeLink isBasePath={isBasePath} />
        <Nav isBasePath={isBasePath} />
      </Container>
    </header>
  )
}
