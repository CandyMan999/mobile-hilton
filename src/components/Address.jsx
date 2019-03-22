import React, { Component } from "react";
import { white } from "ansi-colors";

const Address = () => {
  return (
    <div style={{ height: "200px", width: "100%", marginLeft: "25px" }}>
      <h1 style={{ color: "white", display: "flex" }}>Hilton Chicago</h1>
      <p style={{ color: "lightBlue", display: "flex" }}>
        720 South Michigan Avenue
      </p>
      <p style={{ color: "lightBlue", display: "flex" }}>
        Chicago, Illinois, 60605
      </p>

      <p
        style={{
          color: "white",
          borderBottom: "solid 2px white",
          width: "fit-content"
        }}
      >
        1-312-922-4400
      </p>
    </div>
  );
};

export default Address;
