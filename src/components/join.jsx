import React from "react"
import theme from "../gatsby-plugin-theme-ui"
import { StyledJoin } from "./styles"
import Button from '@material-ui/core/Button';
import { css } from "@emotion/core"
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  joinButton: {
    margin: "10px",
    fontSize: "1.5em"
  },
}));

// TODO (adriano) in the future we will want to display the current date
// on the airtable (should be possible in JS with vanilla functions)
const Join = () => {
  const classes = useStyles()

  return (
    <StyledJoin>
      <h1>Connect</h1>
      <div style={{ padding: "20px" }}>
        <iframe class="airtable-embed" src="https://airtable.com/embed/shr98eK5zbX1YVI3u?backgroundColor=orange&viewControls=on&date=2021-09-01" frameborder="0" onmousewheel="" width="100%" height="533" css={css`background: transparent; border: 1px solid #ccc;`}></iframe>
      </div>

      <div
        style={{"display": "flex", "flex-flow": "row wrap", "justify-content": "center"}}>
        <Button className={classes.joinButton} variant="contained" color="primary" href="https://forms.gle/Hiicb6ii9EACdTCu5" target="_blank" rel="noopener noreferrer">
          Join Slack
        </Button>
        <Button className={classes.joinButton} variant="contained" color="primary" href="https://mit.us16.list-manage.com/subscribe/post?u=b71b58fc01f0404f5bfaffe4d&amp;id=f1d937193c" target="_blank" rel="noopener noreferrer">
          Join Mailing List
        </Button>
      </div>

    </StyledJoin>
  )
}

export default Join
