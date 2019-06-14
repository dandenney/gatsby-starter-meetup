import React from "react"
import { graphql } from "gatsby"

import Layout from "components/layout"
import Image from "components/image"
import SEO from "components/seo"

import { Card, List, SubTitle, Title, Wrapper } from "pages/index-styles"

const IndexPage = ({ data }) => {
  const { title, description } = data.site.siteMetadata

  return (
    <Layout>
      <SEO title="Home" />
      <Wrapper>
        <Card>
          <Image />
          <Title>{title}</Title>
          <SubTitle>{description}</SubTitle>
          <h2>Tracks</h2>
          <List>
            <li>no-useless-escape</li>
            <li>’success’ is not defined</li>
            <li>sentMessage</li>
            <li>bad request</li>
            <li>PromiseRejectionEvent</li>
            <li>failed to process</li>
          </List>
        </Card>
      </Wrapper>
    </Layout>
  )
}

export const siteQuery = graphql`
  {
    site {
      siteMetadata {
        description
        title
        author
      }
    }
    allMdx {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

export default IndexPage
