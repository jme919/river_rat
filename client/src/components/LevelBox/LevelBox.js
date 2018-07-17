import React from "react";
import "./LevelBox.css";

const LevelBox = props => (
    <div className="level-databox">
        <p className="level-heading">River Level</p>
        <p className="level-data">{props.level}</p>
        <p className="level-definition">Feet</p>
    </div>
)

export default LevelBox