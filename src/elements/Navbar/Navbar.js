import React, { Component } from 'react'
import { Flex } from 'rebass'
import NavLink from './NavLink'

class Navbar extends Component {
  render () {
    const { t } = this.props;
    return (
      <div 
        style={{
          padding: '.9375rem 0',
          letterSpacing: '.7px',
        }}
      >
        <Flex alignItems='center' justifyContent='space-around' mt='6'>
          <NavLink
            to='/#news'
            children='News'
          />
          <NavLink
            to='/#contest'
            children='Contests'
          />
          <NavLink
            to='/#about'
            children= 'About'
          />
          <NavLink
            to='/#join'
            children='Feedback'
          />
        </Flex>
      </div>
);

}}

export default Navbar;