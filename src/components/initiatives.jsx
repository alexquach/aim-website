import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import theme from "../gatsby-plugin-theme-ui"
import { StyledInitiatives } from "./styles"
import InitiativeItem from "./InitiativeItem"
import { css } from "@emotion/core"
import Grid from '@material-ui/core/Grid';

import initiativeInfo from "../data/initiatives.json"

// const data = useStaticQuery(graphql`
//     query {
//       dataJson {
//         inits {
//           title
//           description
//           img_link
//         }
//       }
//     }
//   `)

const Initiatives = () => {


  return (
    <StyledInitiatives>
      <div>
        <h1> Intiatives </h1>
        AIM is a community of undergraduates aimed at promoting and fostering the growing interest around machine intelligence on campus. We hold weekly discussions on the latest papers in the field, organize workshops, host speakers, and arrange competitions around machine intelligence at MIT.
      </div>


      <Grid container spacing={3} alignItems="stretch" direction="row" style={{"margin": "20px"}}>
        {initiativeInfo.map(initiative => (
          <Grid item sm={12} md={6}>
            <InitiativeItem
              title={initiative.title}
              description={initiative.description}
            />
          </Grid>
        ))}
      </Grid>


    </StyledInitiatives>
  )
}

export default Initiatives
