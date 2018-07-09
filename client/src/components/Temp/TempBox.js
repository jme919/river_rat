import React from "react"
import "./TempBox.css"
import LevelBox from "../LevelBox";

const TempBox = props => (
    <div className="temp-databox">
        <p className="temp-heading">Temperature</p>
        <p className="temp-data">{(props.temp * 1.8 + 32).toFixed(2)}</p>
        <p className="temp-definition">&deg;F</p>
    </div>    
)

export default TempBox