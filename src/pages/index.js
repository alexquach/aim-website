import React from "react"
import theme from "../gatsby-plugin-theme-ui";
import { Section, Header, Splash, Initiatives, Team, Join, Sponsors } from "../components";

export default function Home() {
  return (
    <span>
    <Section backgroundColor={theme.colors.dark} id="splash">
      <Header/>
      <Splash/>
    </Section>

    <Section backgroundColor={theme.colors.primary} id="join">
      <Join/>
    </Section>

    <Section backgroundColor={theme.colors.secondary} id="initiatives">
      <Initiatives/>
    </Section>

    <Section backgroundColor={theme.colors.tertiary} id="team">
      <Team/>
    </Section>

    <Section backgroundColor={theme.colors.dark} id="sponsors">
      <Sponsors/>
    </Section>

    </span>
  )
}
