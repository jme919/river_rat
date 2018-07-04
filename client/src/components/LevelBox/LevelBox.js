import React from "react";
import "./LevelBox.css";

const LevelBox = props => <p className = "level-databox">{props.level}</p>


export default LevelBox

// const LevelBox = props => (
//     <div className = "river-databox">
//         <p className = "level-title">River Level</p>
//         <p>{props.level}</p>
//     </div>

// )