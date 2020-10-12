import React from "react"
import theme from "../gatsby-plugin-theme-ui"
import { StyledSplash, StyledSplashText, logoStyle } from "./styles"
import { css } from "@emotion/core"

import logo from "../../static/logo.png"

const Splash = () => {
  return (
    <StyledSplash>

      <div css={css`max-height: 50%`}>
        <img css={logoStyle} src={logo} />
      </div>

      <StyledSplashText>
        <div css={css`
            font-size: ${theme.fontSizes[10]}px;`}
        >
          AI@MIT
          </div>
        <div css={css`
            font-size: ${theme.fontSizes[5]}px;`}
        >
          Artificial Intelligence(&nbsp;Club)? at MIT
          </div>
      </StyledSplashText>
    </StyledSplash>
  )
}

export default Splash
