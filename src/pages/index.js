import React from "react"
import theme from "../gatsby-plugin-theme-ui";
import { Section, Header, Splash, Initiatives, Team, Join, Sponsors } from "../components";
import { css } from "theme-ui";

export default function Home() {
  return (
    <span>
      <div style={{
        "background-image": `linear-gradient(${theme.colors.dark} 70vh, ${theme.colors.primary}, 
        ${theme.colors.secondary}, ${theme.colors.tertiary}, ${theme.colors.dark}`
      }}>
        <Section id="splash">
          <Header />
          <Splash />
        </Section>

        <Section id="join">
          <Join />
        </Section>

        <Section id="initiatives">
          <Initiatives />
        </Section>

        <Section id="team">
          <Team />
        </Section>


        <Section id="sponsors">
          <Sponsors />
        </Section>

      </div>

    </span>
  )
}
