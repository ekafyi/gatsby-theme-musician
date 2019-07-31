import React from "react"
import { Link } from "gatsby"
import { Styled, Container } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO pageTitle="Page Not Found" />
    <Container>
      <Styled.h1>Page Not Found :(</Styled.h1>
      <Styled.p>
        <Link to="/">Return Home</Link>
      </Styled.p>
    </Container>
  </Layout>
)

export default NotFoundPage
