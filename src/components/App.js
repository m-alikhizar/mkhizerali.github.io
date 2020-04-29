import React, { Component } from "react";
import Header from "./Header";
// import LeftAside from './LeftAside'
import Paper from "material-ui/Paper";
import Center from "./Center";

const container = {
  display: "flex",
  flexFlow: "row nowrap"
};

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <Paper style={container} zDepth={0}>
          <Center />
        </Paper>
      </div>
    );
  }
}

export default App;
