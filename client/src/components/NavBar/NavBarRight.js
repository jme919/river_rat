import React, { Component } from "react";
import "./NavBar.css";

export class NavBarRight extends Component {
  render() {
    return (
      <div className="NavBarRight">
        <ul>
          <li> Sign In </li>
          <li>  |  </li>
          <li> Sign Up </li>
        </ul>
      </div>
    );
  }
}