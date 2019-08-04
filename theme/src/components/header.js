/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Container, jsx } from "theme-ui"

import useSiteMetadata from "../use-site-metadata"
import NavLink from "./nav-link"
import AnchorLink from "react-anchor-link-smooth-scroll"

import userConfig from "../config/navigation.yml"

const homeLinkStyle = {
  variant: "layout.header.link",
  fontSize: [2, 2, 3],
}

export default ({ children, location, isBasePath }) => {
  const { title, logoImg } = useSiteMetadata()
  const userNav = userConfig.navigation

  return (
    <header role="banner" sx={{ variant: "layout.header" }}>
      <Container sx={{ variant: "layout.header.container" }}>
        <div sx={{ variant: "layout.header.homeLink" }}>
          {logoImg ? (
            isBasePath ? (
              <AnchorLink href="#main">
                <Img fixed={logoImg.fixed} />
              </AnchorLink>
            ) : (
              <Link to="/">
                <Img fixed={logoImg.fixed} />
              </Link>
            )
          ) : isBasePath ? (
            <AnchorLink href="#main" sx={homeLinkStyle}>
              {title}
            </AnchorLink>
          ) : (
            <NavLink to="/" sx={homeLinkStyle}>
              {title}
            </NavLink>
          )}
        </div>
        <nav sx={{ a: { variant: "layout.header.link" } }}>
          {children ? (
            <div sx={{ variant: "layout.header.customChild" }}>{children}</div>
          ) : null}
          {!children && userNav.length ? (
            <>
              {userNav.map(nav => {
                if (
                  isBasePath &&
                  (nav.url.startsWith("#") || nav.url.startsWith("/#"))
                ) {
                  return (
                    <AnchorLink key={nav.text} href={nav.url}>
                      {nav.text}
                    </AnchorLink>
                  )
                } else if (nav.url.startsWith("http")) {
                  return (
                    <NavLink key={nav.text} href={nav.url}>
                      {nav.text}
                    </NavLink>
                  )
                } else {
                  return (
                    <NavLink key={nav.text} to={nav.url}>
                      {nav.text}
                    </NavLink>
                  )
                }
              })}
            </>
          ) : null}
        </nav>
      </Container>
    </header>
  )
}
