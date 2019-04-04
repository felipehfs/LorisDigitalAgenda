import React, { Component } from "react";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import axios from 'axios'
import { Provider } from 'react-redux'
import mainStore from './store'

const theme = createMuiTheme({
  palette: {
    primary: { main: "#37474F" },
    secondary: { main: "#4DD0E1" },
    typography: {
      useNextVariants: true,
    }
  }
});

class App extends Component {
  componentDidMount() {
    if(localStorage.getItem('authToken')){
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authToken')}`
    }
  }
  render() {
    return (
        <Provider store={mainStore}>
        <CssBaseline>
          <MuiThemeProvider theme={theme}>
            <BrowserRouter>
              <Routes />
            </BrowserRouter>
          </MuiThemeProvider>
        </CssBaseline>
        </Provider>
    );
  }
}

export default App;
