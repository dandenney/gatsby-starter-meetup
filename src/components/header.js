import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ data }) => (
  <header>
    <h1 style={{ margin: 0 }}>
      <Link to="/">{data.siteTitle}</Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
