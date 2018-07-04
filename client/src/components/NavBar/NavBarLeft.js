import React, { Component } from "react";
import "./NavBar.css";

export class NavBarLeft extends Component {
  render() {
    return (
      <div className="NavBarLeft">
        <ul>
          <li> Home </li>
          <li> | </li>
          <li> Parks </li>
          <li> | </li>
          <li> Outfitters </li>
        </ul>
      </div>
    );
  }
}
