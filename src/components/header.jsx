import React from "react"
import { Container, Styled } from "theme-ui"
import { StyledHeader, Nav, NavItem, NavList, NavLink, logoStyle, ScrollLinkStyle } from "./styles"
import { Link as ScrollLink, animateScroll } from "react-scroll";

const Header = () => {
  return (
    <StyledHeader>
      <Container style={{ maxWidth: 80 + "%" }}>
        <Nav>
          <ScrollLink css={ScrollLinkStyle} to={"splash"} smooth={"easeInOutCubic"} offset={-100}>
            AI@MIT
          </ScrollLink>
          <NavList>
            <NavItem>
              <ScrollLink css={ScrollLinkStyle} to="connect" smooth={"easeInOutCubic"} offset={95}>
                Connect
              </ScrollLink>
            </NavItem>
            <NavItem>
              <ScrollLink css={ScrollLinkStyle} to={"initiatives"} smooth={"easeInOutCubic"} offset={95}>
                Initiatives
              </ScrollLink>
            </NavItem>
            <NavItem>
              <ScrollLink css={ScrollLinkStyle} to="team" smooth={"easeInOutCubic"} offset={-50}>
                Team
              </ScrollLink>
            </NavItem>
            <NavItem>
              <ScrollLink css={ScrollLinkStyle} to="sponsors" smooth={"easeInOutCubic"}>
                Sponsors
              </ScrollLink>
            </NavItem>
          </NavList>
        </Nav>
      </Container>
    </StyledHeader>
  )
}

export default Header
