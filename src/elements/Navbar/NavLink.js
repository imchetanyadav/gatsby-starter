import { NavLink as Nav } from 'rebass'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { fonts, fontSizes, colors } from '../../theme'

const NavLink = styled(Link)`
  font-family: ${fonts.primary};
  font-weight: 400;
  font-size: ${fontSizes[2] + 'px'};
  text-transform: uppercase;
  transition: all 0.3s linear;
  color: ${colors.black};
  text-decoration: none;
  padding: 0.5rem;

  &:hover {
    color: ${colors.primary}
  }
`

export default NavLink;