import React, { Component } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom"

export class NavBarLeft extends Component {
  render() {
    return (
        <div className="NavBarLeft">
          <ul>
            <li><Link to="/"> Home </Link></li>
            <li> | </li>
            <li><Link to="/parkspage"> Parks </Link></li>
            <li> | </li>
            <li><Link to="/outfitters"> Outfitters </Link></li>
          </ul>
        </div>
    );
  }
}

{/* <li><NavLink to="../../pages/HomePage"> Home </NavLink></li> */}