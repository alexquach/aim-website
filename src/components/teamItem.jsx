import React from "react"
import theme from "../gatsby-plugin-theme-ui"
import { css } from "@emotion/core"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: "0px 20px 0px 20px"
  },
  titlebar: {
    display: "flex",
    flexFlow: "column wrap",
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
  tightMargin: {
    margin: '3px',
    fontWeight: '400',
    textAlign: 'center'
  }
}));

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const InitiativeItem = ({ name, bio, headshot, role, children }) => {
  const classes = useStyles()

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.modal}>
      <div style={{'justify-content': 'center', 'display': 'flex'}}>
      <Avatar src={headshot} alt={name} className={classes.avatar}/>
      </div>
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );

  return (
      <div className={classes.titlebar}>
        <Avatar src={headshot} alt={name} className={classes.avatar} onClick={handleOpen} style={{'cursor': 'pointer'}}/>
        <h2 className={classes.tightMargin}>{name}</h2>
        <h3 className={classes.tightMargin}>{role}</h3>

        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="team-modal"
        aria-describedby="modal for team member describing name, bio, and role"
      >
        {body}
      </Modal>
      </div>
  )
}

export default InitiativeItem
