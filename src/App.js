import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Select from "./components/Select";
import Address from "./components/Address";
import backGround from "./images/background.png";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${backGround})`,
          height: "100vh",
          width: "100vw"
        }}
        className="App"
      >
        <Navbar />
        <Main />
        <Address />
        <Select />
      </div>
    );
  }
}

export default App;
