import React from "react";
import "./SpeedBox.css";
import LevelBox from "../LevelBox";

const SpeedBox = props => (
    <div className="speed-databox">
        {/* <i className="fab fa-digital-ocean"/> */}
        <i className="fas fa-tachometer-alt"/>
        <p className="speed-heading">Speed</p>
        <p className="speed-data">{props.speed}</p>
        <p className="speed-definition">Cubic ft/sec</p>
    </div>    
)
export default SpeedBox

