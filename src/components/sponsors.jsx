import React from "react"
import theme from "../gatsby-plugin-theme-ui"
import { StyledSponsor } from "./styles"
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SponsorItem from "./sponsorItem"

import sponsorInfo from "../data/sponsors.json"
import pastSponsorInfo from "../data/past_sponsors.json"

const Sponsors = () => {
  return (
    <StyledSponsor>
      <div style={{ 'width': "100%" }}>
        <h1 style={{ 'text-align': 'left', 'display': 'inline-block' }}>Current Sponsors</h1>
      </div>

      <Paper elevation={12} style={{ 
        'display': 'flex', 'flex-flow': 'row wrap', 
        "justify-content": "space-evenly", "width": "100%",
        "padding": "15px 0px 15px 0px", "align-content": "space-around" }}>
          {sponsorInfo.map(sponsor => (
            <SponsorItem
              name={sponsor.name}
              img_link={sponsor.img_link}
            />
          ))}
        </Paper>

      <div style={{ 'width': "100%" }}>
        <h1 style={{ 'text-align': 'left', 'display': 'inline-block' }}>Past Sponsors</h1>
      </div>


      <Paper elevation={12} style={{ 
        'display': 'flex', 'flex-flow': 'row wrap', 
        "justify-content": "space-evenly", "width": "100%",
        "padding": "15px 0px 15px 0px", "align-content": "space-around" }}>

        {pastSponsorInfo.map(sponsor => (
          <SponsorItem
          name={sponsor.name}
          img_link={sponsor.img_link}
          />
        ))}

      </Paper>

      <p>
      Interested in sponsoring AIM? <a href="mailto:aim-exec@mit.edu" style={{"color": "#8bcdcd"}}>Email us</a> for more details!
      </p>

    </StyledSponsor>
  )
}

export default Sponsors