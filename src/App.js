import React, { Component } from "react";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#37474F" },
    secondary: { main: "#4DD0E1" }
  }
});

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline>
          <MuiThemeProvider theme={theme}>
            <BrowserRouter>
              <Routes />
            </BrowserRouter>
          </MuiThemeProvider>
        </CssBaseline>
      </React.Fragment>
    );
  }
}

export default App;
