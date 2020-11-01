import React from "react"
import theme from "../gatsby-plugin-theme-ui"
import { css } from "@emotion/core"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: "0px 20px 0px 20px"
  },
  titlebar: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    alignItems: "center"
  }
}));

const InitiativeItem = ({ name, bio, headshot, children }) => {
  const classes = useStyles()

  return (
    <Paper className={classes.paper} elevation={3}>
      <div className={classes.titlebar}>
        <Avatar src={headshot} alt={name} width="100px" className={classes.avatar} />
        <h2>{name}</h2>
      </div>
      <p>{bio}</p>
      {children}
    </Paper>
  )
}

export default InitiativeItem
