import React, { Component } from "react";
import "./App.css";
import TableComponent from "./components/table/table-component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Dashboard!</h2>
        <TableComponent />
      </div>
    );
  }
}

export default App;
