import React from "react"
import { css } from "@emotion/core"
import Grid from '@material-ui/core/Grid';
import { StyledTeam } from "./styles"
import TeamItem from "./TeamItem"

import teamInfo from "../data/team.json"

const Team = () => {
  return (
    <StyledTeam>
      <div style={{'width': "100%"}}>
        <h1 style={{ 'text-align': 'left', 'display': 'inline-block' }}>Team</h1>
      </div>

      <Grid container spacing={3} alignItems="stretch" direction="row" style={{ "margin": "20px", "justify-content": "center" }}>
        {teamInfo.map(person => (
          <Grid item sm={6} md={3}>
            <TeamItem
              name={person.name}
              bio={person.bio}
              headshot={person.img}
              role={person.role}
            />
          </Grid>
        ))}
      </Grid>
    </StyledTeam>
  )
}

export default Team
