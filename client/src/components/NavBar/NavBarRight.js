import React, { Component } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom"

export class NavBarRight extends Component {
  render() {
    return (
      <div className="NavBarRight">
        <ul>
          <li> <Link to="/login">Sign In</Link> </li>
          <li>  |  </li>
          <li> <Link to="/signup">Sign Up</Link> </li>
        </ul>
      </div>
    );
  }
}