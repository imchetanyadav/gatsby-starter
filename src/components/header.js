import React from 'react'
import Link from 'gatsby-link'
import Navbar from '../elements/Navbar/Navbar'
import {Image, Flex , Box} from 'rebass'
import NavDrawer from '../elements/Navbar/NavDrawer'
import styled from 'styled-components'

const OnlySmallScreenBox = styled(Box)`
  @media (min-width: 48em) {
    display: none;
  }
`
const OnlyLargeScreenBox = styled(Box)`
  @media (max-width: 48em) {
    display: none;
  }
`
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
        // maxWidth: 1160,
      }}
    >

      <Flex flexDirection= 'row' justifyContent= 'space-between' px={[3]} alignItems='center' my={2}>
        <Image src = "/img/logo.svg" style={{maxWidth:'100px'}} />
        <OnlySmallScreenBox>
          <NavDrawer/>
        </OnlySmallScreenBox>
        <OnlyLargeScreenBox>
          <Navbar />
        </OnlyLargeScreenBox>
      </Flex>
    </div>
  </div>
)

export default Header
