import React from "react"
import { InitializeColorMode, ThemeProvider } from "theme-ui";
import theme from "../gatsby-plugin-theme-ui";
import { Layout, Styled } from "theme-ui";
import { Section, Header, Splash, Initiatves, Team, Join, Sponsors } from "../components";

export default function Home() {
  return (
    <span>
    <Section backgroundColor={theme.colors.dark} id="splash">
      <Header/>
      <Splash/>
    </Section>

    <Section backgroundColor={theme.colors.primary} id="initiatives">
      <Initiatves/>
    </Section>

    <Section backgroundColor={theme.colors.secondary} id="team">
      <Team/>
    </Section>

    <Section backgroundColor={theme.colors.tertiary} id="join">
      <Join/>
    </Section>

    <Section backgroundColor={theme.colors.dark} id="sponsors">
      <Sponsors/>
    </Section>

    </span>
  )
}
