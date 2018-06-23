import React, { Component } from "react";
import "./NavBar.css";
import { NavBarLeft } from "./NavBarLeft";
import { NavBarRight } from "./NavBarRight";

export class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <NavBarLeft/>
        <NavBarRight/>
      </div>
    );
  }
}