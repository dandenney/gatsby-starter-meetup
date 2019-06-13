/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const PostsLayout = ({ children }) => (
  <main>
    <article>{children}</article>
  </main>
)

PostsLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PostsLayout
