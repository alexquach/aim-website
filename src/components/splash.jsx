import React from "react"
import theme from "../gatsby-plugin-theme-ui"
import { StyledSplash, StyledSplashText, StyledLogoPair, StyledCalendarButtons } from "./styles"
import { css } from "@emotion/core"
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


import logo from "../../static/logo.png"
const useStyles = makeStyles((theme) => ({
  joinButton: {
    margin: "10px",
    fontSize: "1.5em"
  },
}));

// Doesn't work with build? TODO (adriano)
const logoHeight = typeof window !== `undefined` ? (window.innerWidth > 700 ? "300" : "150") : "300";
const logoMarginBottom = typeof window !== `undefined` ? (window.innerWidth > 700 ? "150" : "50") : "150";

// Margin 150 is a quick hack to avoid ^
const logoStyle = css`
  height: ${logoHeight}px;
  // color: white;
  // filter: invert(95%) sepia(100%) saturate(21%) hue-rotate(345deg) brightness(103%) contrast(107%);
  margin-top: auto;
  margin-bottom: ${logoMarginBottom}px;
  `

// This is the previous airtable btw:
// <iframe class="airtable-embed" src="https://airtable.com/embed/shr98eK5zbX1YVI3u?backgroundColor=orange&viewControls=on&date=2021-09-01" frameborder="0" onmousewheel="" width="100%" height="533" css={css`background: transparent; border: 1px solid #ccc;`}></iframe>
const Splash = () => {
  const classes = useStyles()
  return (
    <StyledSplash>

      <StyledLogoPair>
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
            Artificial Intelligence Club at MIT
            </div>
        </StyledSplashText>
      </StyledLogoPair>

      <StyledCalendarButtons>
        <div style={{ padding: "20px" }}>
          <iframe 
            src="https://calendar.google.com/calendar/embed?src=o2l92fc80naot7nh8fmc4iklh8%40group.calendar.google.com&ctz=America%2FNew_York"
            frameborder="0"
            onmousewheel=""
            width="100%"
            height="533"
            frameborder="0"
            scrolling="no"
            css={css`background: transparent; border: 1px solid #ccc;`}>
            </iframe>
        </div>

        <div
          style={{"display": "flex", "flex-flow": "row wrap", "justify-content": "center"}}>
          <Button className={classes.joinButton} variant="contained" color="primary" href="https://forms.gle/Hiicb6ii9EACdTCu5" target="_blank" rel="noopener noreferrer">
            Join Slack
          </Button>
          <Button className={classes.joinButton} variant="contained" color="primary" href="https://mit.us16.list-manage.com/subscribe/post?u=b71b58fc01f0404f5bfaffe4d&amp;id=f1d937193c" target="_blank" rel="noopener noreferrer">
            Join Mailing List
          </Button>
          <Button className={classes.joinButton} variant="contained" color="primary" href="mailto:aim-exec@mit.edu" target="_blank" rel="noopener noreferrer">
            Email us
          </Button>
        </div>
      </StyledCalendarButtons>
    </StyledSplash>
  )
}

export default Splash
