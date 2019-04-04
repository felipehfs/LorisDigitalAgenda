import React from "react";
import {
  Card,
  Typography,
  CardHeader,
  Avatar,
  CardContent,
  Chip
} from "@material-ui/core";
import ActionMenu from './ActionMenu'
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const styles = {
  card: {
    marginTop: 20
  },
  chip: {
    marginRight: 10,
    marginTop: 3
  },
  avatar: {
    background: 'orange'
  }
};

function displayAvatar(defaultName) {
  if(localStorage.getItem('username')) {
    return <Avatar>{localStorage.getItem("username")[0].toUpperCase()}</Avatar>
  }
  return <Avatar>{defaultName}</Avatar>
}

const JournalCard = props => {
  const createdAt = new Date(Date.parse(props.createdAt))

  return  (
    <Card className={props.classes.card}>
      <CardHeader
        avatar={displayAvatar()}
        title={`Dia ${createdAt.getDate().toString()}`} 
        subheader={Intl.DateTimeFormat("pt-BR", {
          weekday: "long",
          month: "long",
          year: "numeric"
        }).format(createdAt)}
        action={
         <ActionMenu id={props._id} filed={props.filed} archived={props.archived} />
        }
      />
      <CardContent>
        <Typography paragraph>{props.description}</Typography>
        {props.stickers && props.stickers.map((sticker,index) => <Chip key={index} label={sticker} className={props.classes.chip}/>)}
      </CardContent>
    </Card>
  );
}

JournalCard.propTypes = {
  classes: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  createdAt: PropTypes.any,
  stickers: PropTypes.array
};

export default withStyles(styles)(JournalCard);
