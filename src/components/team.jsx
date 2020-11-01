import React from "react"
import { css } from "@emotion/core"
import Grid from '@material-ui/core/Grid';
import { StyledTeam } from "./styles"
import TeamItem from "./TeamItem"

import teamInfo from "../data/team.json"

const Team = () => {
  return (
    <StyledTeam> 
        <h1>Team</h1>

        <Grid container spacing={3} alignItems="stretch" direction="row" style={{"margin": "20px"}}>
        {teamInfo.map(person => (
          <Grid item sm={12} md={6}>
            <TeamItem
              name={person.name}
              bio={person.bio}
              headshot={person.img}
            />
          </Grid>
        ))}
      </Grid>
    </StyledTeam>
  )
}

export default Team
