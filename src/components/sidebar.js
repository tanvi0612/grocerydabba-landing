import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  padding: 10px;
  height: 42px;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
  z-index: 9;

  &:hover {
    opacity: 0.7;
  }

  &.is-active:hover {
    opacity: 0.7;
  }

  &.is-active .hamburger-inner,
  &.is-active .hamburger-inner::before,
  &.is-active .hamburger-inner::after {
    background-color: #000;
  }

  .hamburger-box {
    width: 35px;
    height: 24px;
    display: inline-block;
    position: relative;
  }

  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
  }
  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    width: 35px;
    height: 2px;
    background-color: #000;
    border-radius: 2px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }
  .hamburger-inner::before,
  .hamburger-inner::after {
    content: "";
    display: block;
  }
  .hamburger-inner::before {
    top: -10px;
  }
  .hamburger-inner::after {
    bottom: -10px;
  }

  &.is-active .hamburger-inner::before {
    transform: translate3d(-10px, 5px, 18px) rotate(-35deg) scale(0.5, 1);
  }

  &.is-active .hamburger-inner::after {
    transform: translate3d(-10px, -5px, -18px) rotate(35deg) scale(0.5, 1);
  }

  &.hamburger--collapse .hamburger-inner {
    top: auto;
    bottom: 0;
    transition-duration: 0.13s;
    transition-delay: 0.13s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  &.hamburger--collapse .hamburger-inner::after {
    top: -20px;
    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      opacity 0.1s linear;
  }

  &.hamburger--collapse .hamburger-inner::before {
    transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  &.hamburger--collapse.is-active .hamburger-inner {
    transform: translate3d(0, -10px, 0) rotate(-45deg);
    transition-delay: 0.22s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  &.hamburger--collapse.is-active .hamburger-inner::after {
    top: 0;
    opacity: 0;
    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
      opacity 0.1s 0.22s linear;
  }

  &.hamburger--collapse.is-active .hamburger-inner::before {
    top: 0;
    transform: rotate(-90deg);
    transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
      transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  @media (max-width: 550px) {
    display: block;
  }
`

const SidePanel = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  background: white;
  transform: translate(${({ show }) => (show ? "0" : "100vw")});
  padding: 4rem 0 1rem;
  transition: all 0.3s ease-in-out;
  will-change: transition;
`

const PanelTab = styled(Link)`
  display: block;
  padding: 1rem;

  &.active {
    background: rgba(33, 118, 255, 1);
    color: white;
  }
`

const Sidebar = props => {
  const [open, setOpen] = useState(false)

  return (
    <React.Fragment>
      <Hamburger
        className={open ? "is-active" : ""}
        onClick={() => setOpen(open => !open)}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </Hamburger>
      <SidePanel show={open}>
        <PanelTab to="/" activeClassName="active">
          Home
        </PanelTab>
        <PanelTab to="/faq" activeClassName="active">
          FAQs
        </PanelTab>
        <PanelTab to="/about" activeClassName="active">
          About us
        </PanelTab>
        <PanelTab to="/apply" activeClassName="active">
          Apply Now
        </PanelTab>
      </SidePanel>
    </React.Fragment>
  )
}

export default Sidebar
