import React from "react";
import hotel from "../images/hotelexterior.jpg";
const Main = () => {
  return (
    <div style={{ margin: "25px", height: "200px" }}>
      <img
        className="exterior"
        style={{ height: "100%", width: "100%", border: "solid 5px white" }}
        src={hotel}
        alt="exterior"
      />
    </div>
  );
};

export default Main;
