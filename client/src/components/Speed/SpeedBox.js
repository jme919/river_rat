import React from "react";
import "./SpeedBox.css";
import LevelBox from "../LevelBox";

const SpeedBox = props => (
    <div className="speed-databox">
        <p className="speed-heading">Speed &nbsp;<i className="fas fa-arrow-alt-circle-right"></i></p>
        <p className="speed-data">{props.speed}</p>
        <p className="speed-definition">Cubic ft/sec</p>
    </div>    
)
export default SpeedBox

