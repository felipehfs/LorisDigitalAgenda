import React from "react";
import {
  Paper,
  Typography,
  FormControl,
  TextField,
  Button,
  Grid,
  IconButton,
  CircularProgress,
  Tooltip
} from "@material-ui/core";
import PropTypes from 'prop-types'
import { withStyles } from "@material-ui/core/styles";
import MicIcon from "@material-ui/icons/Mic";

const styles = theme => ({
  paper: {
    padding: 15
  }
});

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const SpeechButton = props => {
  if (props.listening) {
    return <CircularProgress color="secondary" onClick={props.handleClick} />;
  }
  return (
    <Tooltip title="Espere 3 segundos para começar a falar" placement="right-start">
      <IconButton onClick={props.handleClick} aria-label="recording">
        <MicIcon />
      </IconButton>
    </Tooltip>
  );
};

recognition.continous = true;
recognition.interimResults = false;
recognition.language = "pt-BR";

const journalForm = props => {
  const { classes } = props;
  const [description, setDescription] = React.useState(props.description);
  const [listening, setListening] = React.useState(false);

  const toggleListen = () => {
    setListening(!listening);
    if (listening) {
      recognition.stop();
    } else {
      recognition.start();
    }

    recognition.onspeechend = () => {
      recognition.stop();
      setListening(false);
    };

    recognition.onresult = event => {
      let results = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal)
          results += event.results[i][0].transcript + " ";
        else results += event.results[i][0].transcript;
      }

      if (description[description.length - 1] !== " ") {
        setDescription(description + " " + results);
      } else {
        setDescription(description + results);
      }
    };
  };

  return (
    <Paper className={classes.paper}>
      <Typography variant="h5" align="center">
        {props.header}
      </Typography>
      <form>
        <FormControl margin="normal" fullWidth>
          <TextField
            id="multiline-description"
            variant="outlined"
            autoFocus
            value={description}
            onChange={e => setDescription(e.target.value)}
            multiline
            rows="10"
            margin="normal"
            required
          />
        </FormControl>
        <Grid container justify="space-between">
          <Grid item>
            <SpeechButton listening={listening} handleClick={toggleListen}/>
          </Grid>
          <Grid item>
            <Button color="primary" type="submit" onClick={ e => {
              e.preventDefault()
              props.handleSubmit({ description })
            }}>
              Salvar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

journalForm.defaultProps = {
  description: ''
}

journalForm.propTypes = {
  description: PropTypes.string,
  header: PropTypes.string.isRequired
}

export default withStyles(styles)(journalForm);
