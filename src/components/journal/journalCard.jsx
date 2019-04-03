import React from "react";
import {
  Card,
  Typography,
  CardHeader,
  Avatar,
  CardContent,
  IconButton
} from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const styles = {
  card: {
    marginTop: 20
  }
};

const JournalCard = props => (
  <Card className={props.classes.card}>
    <CardHeader
      avatar={<Avatar>R</Avatar>}
      title={props.createdAt.getDate().toString()}
      subheader={Intl.DateTimeFormat("pt-BR", {
        weekday: "long",
        month: "long",
        year: "numeric"
      }).format(props.createdAt)}
      action={
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      }
    />
    <CardContent>
      <Typography paragraph>{props.description}</Typography>
    </CardContent>
  </Card>
);

JournalCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(JournalCard);
