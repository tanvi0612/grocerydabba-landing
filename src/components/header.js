import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
import React from "react"

import { Button } from "./sharedComponents"
import Sidebar from "./sidebar"

import logo from "../assets/logo/logo.png"

const HeaderCard = styled.header`
  padding: 0.5rem;
  box-shadow: 0 10px 11px -11px #00000059;
  position: fixed;
  width: 100%;
  background: white;
  z-index: 9;
`

const NavTabsWrap = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 7rem 1fr min-content min-content min-content;
  align-items: center;

  @media (max-width: 550px) {
    grid-template-columns: min-content 1fr min-content;
  }
`

const Logo = styled.img`
  user-select: none;
  text-decoration-line: none;
  margin: 0;
  object-position: center;
  height: 3rem;
  object-fit: contain;
  margin-bottom: -8px;
`

const NavTab = styled(Link)`
  min-width: 6rem;
  text-align: center;
  user-select: none;
  border-radius: 0.2rem;
  padding: 0.3rem;
  background: ${({ theme, primary }) => primary && theme.accentPrimary};
  color: ${({ theme, primary }) => primary && "#FFF"};
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  cursor: pointer;
  position: relative;

  &:after {
    content: ${({ primary }) => !primary && ""};
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    background: ${props => props.theme.accentPrimary};
    width: 0;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    color: ${({ theme, primary }) => (primary ? "#FFF" : theme.accentPrimary)};
    background: ${({ theme, primary }) => primary && theme.accentLight};
    &:after {
      width: 100%;
    }
  }

  @media (max-width: 550px) {
    display: none;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderCard>
    <div className="container">
      <NavTabsWrap>
        <Link
          to="/"
          style={{
            textDecorationLine: "none",
            textDecoration: "none",
            width: "180px",
          }}
        >
          <Logo src={logo} alt="" />
        </Link>

        <div />
        {/* <NavTab to="/faq" activeClassName="active">
          FAQs
        </NavTab>
        <NavTab to="/about" activeClassName="active">
          About
        </NavTab> */}
        {/* <NavTab> */}
        <Button primary onclick="$crisp.push(['do', 'chat:open'])">
          Message Us
        </Button>
        {/* </NavTab> */}

        <Sidebar />
      </NavTabsWrap>
    </div>
  </HeaderCard>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
