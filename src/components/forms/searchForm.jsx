import React, { useState} from "react";
import {
  Paper,
  Typography,
  FormControl,
  TextField,
  Button
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    padding: 15,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column"
  },
  form: {
    display: 'flex',
    alignItems: 'flex-end'
  },
  textField: {
    marginRight: 5,
    width: "93%"
  }
};

const SearchForm = props => {
  const { classes } = props;
  const [search, setSearch] = useState("")
  return (
    <Paper className={classes.root}>
      <Typography variant="h4">Pesquisa avançada</Typography>
      <form className={classes.form} onSubmit={e => {
        e.preventDefault()
          props.handleSubmit(search)
      }}>
        <FormControl margin="auto" className={classes.textField}>
          <TextField label="Busca" value={search} onChange={e => setSearch(e.target.value)} />
        </FormControl>
        <Button variant="contained" className={classes.search} type="submit" color="primary">
          <SearchIcon />
        </Button>
      </form>
    </Paper>
  );
};

export default withStyles(styles)(SearchForm);
