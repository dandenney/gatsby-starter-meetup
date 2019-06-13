/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Layout from "components/layout"

import { Post, Wrapper } from "components/posts-layout-styles"

const PostsLayout = ({ children }) => (
  <Layout>
    <Wrapper>
      <Post>{children}</Post>
    </Wrapper>
  </Layout>
)

PostsLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PostsLayout
