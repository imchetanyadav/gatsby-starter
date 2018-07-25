import React from 'react'
import Link from 'gatsby-link'
import Navbar from '../elements/Navbar/Navbar'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'white',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: '200'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
      }}
    >
    <Navbar />
    </div>
  </div>
)

export default Header
