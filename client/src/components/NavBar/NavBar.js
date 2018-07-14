import React, { Component } from "react";
import "./NavBar.css";
import { NavBarLeft } from "./NavBarLeft";
import { NavBarRight } from "./NavBarRight";

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar is-success">
        <NavBarLeft/>
        <img src="/images/riverratlogorgb.png" id="logo" alt="River Rat Logo"/>
        <NavBarRight/>
      </div>
    );
  }
}

export default NavBar
