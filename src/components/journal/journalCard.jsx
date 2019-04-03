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

const JournalCard = props => {
  return  (
    <Card className={props.classes.card}>
      <CardHeader
        avatar={<Avatar>R</Avatar>}
        title={`Dia ${props.createdAt.getDate().toString()}`} 
        subheader={Intl.DateTimeFormat("pt-BR", {
          weekday: "long",
          month: "long",
          year: "numeric"
        }).format(props.createdAt)}
        action={
         <ActionMenu />
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
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(JournalCard);
