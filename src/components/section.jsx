import React from "react"
import { Container } from "theme-ui"
import { StyledSection } from "./styles"

const Section = ({
  backgroundColor,
  children,
  light = true,
  id,
}) => {
  return (
    <StyledSection
      backgroundColor={backgroundColor}
      light={light || false}
      id={id}
    >
      {children}
    </StyledSection>
  )
}

export default Section
