import React from "react";

const Select = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        border: "1px solid #979797",
        borderRadius: "0.5rem",
        boxShadow: "1px 1px 1px 1px #cbc",

        marginLeft: "25px",
        marginRight: "25px"
      }}
    >
      <div class="btn-group dropright" style={{ width: "100%" }}>
        <button
          style={{ width: "100%", borderBottom: "solid 2px grey" }}
          type="button"
          class="btn btn-secondary dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <p style={{ float: "left" }}>Map</p>
        </button>
        <div class="dropdown-menu">Dropdown menu links</div>
      </div>
      <div class="btn-group dropright" style={{ width: "100%" }}>
        <button
          style={{ width: "100%", borderBottom: "solid 2px grey" }}
          type="button"
          class="btn btn-secondary dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <p style={{ float: "left" }}>Photo Gallery</p>
        </button>
        <div class="dropdown-menu">Dropdown menu links</div>
      </div>
      <div class="btn-group dropright" style={{ width: "100%" }}>
        <button
          style={{ width: "100%", borderBottom: "solid 2px grey" }}
          type="button"
          class="btn btn-secondary dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <p style={{ float: "left" }}>Amenities</p>
        </button>
        <div class="dropdown-menu">Dropdown menu links</div>
      </div>
    </div>
  );
};

export default Select;
