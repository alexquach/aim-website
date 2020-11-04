import styled from "@emotion/styled"
import { keyframes, css } from "@emotion/core"
import theme from "../gatsby-plugin-theme-ui"

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  background: ${theme.colors.dark};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
  color: white;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8vh;
`

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  align-items: center;
`

export const ScrollLinkStyle = css`
  padding: 1rem 0;
  color: ${theme.colors.light};
  text-decoration: none;
  cursor: pointer;
  transition: 0.27s ease;
  &:hover,
  &:focus {
    filter: brightness(0.9);
  }
`

export const NavItem = styled.li`
  padding-left: 1rem;
`

export const SectionWrap = styled.main`
  min-height: 400px;
`

export const StyledSplash = styled.section`
  scroll-snap-align: start;
  display: flex;
  
  flex-flow: row wrap;
  align-content: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  min-height: 400px;
  height: 100vh;
`

export const StyledSplashText = styled.div`
  color: white;
//   font-family: "Segoe UI Light";
  padding-left: 30px;
  padding-right: 15px;
  text-align: center;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
`

export const StyledInitiatives = styled.div`
  min-height: 100vh;
  max-width: 80vw;
  display: flex;
  flex-flow: row wrap; 
  justify-content: space-around;
  align-content: center;
`

export const StyledInitiativesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
  flex-grow: 1
`

export const StyledJoin = styled.div`
  min-height: 100vh;
  width: 80vw;
  display: flex;
  flex-flow: column wrap; 
  justify-content: center;
`

export const StyledTeam = styled.div`
  min-height: 100vh;
  width: 80vw;
  display: flex;
  flex-flow: row wrap; 
  justify-content: space-around;
  align-content: center;
`

export const StyledSponsor = styled.div`
  min-height: 100vh;
  width: 80vw;
  display: flex;
  flex-flow: row wrap; 
  justify-content: space-around;
  align-content: center;
`

export const StyledSection = styled.section`
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100vh;
  @media only screen and (min-width: ${theme.breakpoints[1]}) {
    min-height: 100vh;
    height: auto;
  }
  ${({ backgroundColor, light }) => ({
    background: backgroundColor && backgroundColor,
    color: light ? theme.colors.light : theme.colors.dark,
  })}
`

export const SplashImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 85vh;
  object-fit: contain;
  object-position: bottom;
  user-select: none;
`

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  padding: 1rem 0 0;
`
export const FooterBox = styled.div`
  background: ${theme.colors.light};
  padding: 1rem;
  border-radius: 1rem 1rem 0 0;
  font-size: ${theme.fontSizes[1]}px;

  > p {
    margin: 0;
  }
`

export const Avatar = styled.img`
  border-radius: 1rem;
`

export const HyperLink = styled.a`
  cursor: pointer;
  font-weight: ${theme.fontWeights.semiBold};
  text-decoration: none;
  color: ${theme.colors.dark};
`

export const logoStyle = css`
  height: 200px;
  // color: white;
  // filter: invert(95%) sepia(100%) saturate(21%) hue-rotate(345deg) brightness(103%) contrast(107%);
  margin-top: auto;
  margin-bottom: auto;
  `
