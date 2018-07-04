import React, { Component } from "react";
import "./NavBar.css";

export class NavBarRight extends Component {
  render() {
    return (
      <div className="NavBarRight">
        <ul>
          <li> <a href="/login">Sign In</a> </li>
          <li>  |  </li>
          <li> <a href="/signup">Sign Up</a> </li>
        </ul>
      </div>
    );
  }
}