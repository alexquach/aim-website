import React from "react"
import theme from "../gatsby-plugin-theme-ui"
import { css } from "@emotion/core"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
  },
}));

const InitiativeItem = ({ title, description, children }) => {
  const classes = useStyles()

  const description_array = description.split('<br/>')

  return (
      <Paper className={classes.paper} elevation={3}>
        <h2>{title}</h2>

        <div dangerouslySetInnerHTML={{__html: description.replace(/(<? *script)/gi, 'illegalscript')}} >
        </div>

        {/* {description_array.map(item => (
          <p>
            {item}
          </p>
        ))} */}
        {children}
      </Paper>
  )
}

export default InitiativeItem
