import React, { Component } from "react";
import logo from "../images/hiltonLogo.jpg";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav
        class="navbar navbar-light "
        style={{ borderBottom: "solid 2px grey", background: "#282323" }}
      >
        <button
          type="button"
          className="btn btn-dark"
          style={{ border: "solid 2px grey" }}
        >
          Back
        </button>
        <p
          style={{
            width: "100%",
            position: "absolute",
            fontWeight: "bold",
            color: "white"
          }}
        >
          Hotel Details
        </p>

        <img
          className="logo"
          style={{ height: "54px", width: "54px", border: "solid 2px grey" }}
          src={logo}
          alt="hilton logo"
        />
      </nav>
    );
  }
}

export default NavBar;
