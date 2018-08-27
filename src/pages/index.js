import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi there, my name is Paul. You can find more about me here <a href="pauldariye.com">pauldariye.com</a>.</h1>
    <Link to="/emoji">Show me something fun!</Link>
  </div>
)

export default IndexPage
