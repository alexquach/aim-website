import React from "react"
import theme from "../gatsby-plugin-theme-ui"
import { css } from "@emotion/core"
import { logoStyle } from "./styles"
import { makeStyles } from '@material-ui/core/styles';


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
  },
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const SponsorItem = ({ name, img_link, children }) => {
  const classes = useStyles()
  return (
      <img style={{maxHeight: "100px", maxWidth: "380px", "margin": "20px 5px 20px 5px"}} src={img_link} />
  )
}

export default SponsorItem
