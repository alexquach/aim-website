import React from "react"
import theme from "../gatsby-plugin-theme-ui"
import { StyledJoin, StyledInitiatives } from "./styles"
import { css } from "@emotion/core"

const Join = () => {
  return (
    <StyledJoin>
      <h1>Join</h1>
      <div style={{ padding: "20px"}}>
        <iframe class="airtable-embed" src="https://airtable.com/embed/shr98eK5zbX1YVI3u?backgroundColor=orange&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="533" css={css`background: transparent; border: 1px solid #ccc;`}></iframe>
      </div>
      <br></br>
    </StyledJoin>
  )
}

export default Join
