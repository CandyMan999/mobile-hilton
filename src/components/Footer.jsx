import React from "react";

const Footer = () => (
  <footer
    style={{
      backgroundColor: "#282323",
      borderTop: "solid 1px grey",
      borderBottom: "solid 1px grey",
      marginTop: "120px"
    }}
    className="footer text-center"
  >
    <div className="container">
      <span className="text-muted">Powered By React </span>
      <img alt="icon" src="./favicon.ico" />
    </div>
  </footer>
);

export default Footer;
