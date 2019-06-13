import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "components/layout"
import Image from "components/image"
import SEO from "components/seo"

const IndexPage = ({ data }) => {
  const { title, description } = data.site.siteMetadata

  return (
    <Layout>
      <SEO title="Home" />
      <h1>{title}</h1>
      <p>{description}</p>
      <h2>Tracks</h2>
      <ul>
        <li>no-useless-escape</li>
        <li>’success’ is not defined</li>
        <li>sentMessage</li>
        <li>bad request</li>
        <li>PromiseRejectionEvent</li>
        <li>failed to process</li>
      </ul>

      <Image />

      {data.allMdx.edges.map(({ node }) => {
        return (
          <Link to={node.frontmatter.path}>
            <h3>{node.frontmatter.title}</h3>
          </Link>
        )
      })}
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
