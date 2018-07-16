import React from "react"
import "./ClarityBox.css"

const ClarityBox = props => (
    <div className="clarity-databox">
        <p className="clarity-heading">Clarity &nbsp; <i className="fas fa-tint"></i></p>
        <p className="clarity-data">{props.clarity}</p>
        <p className="clarity-defintion">{"<10 is good"}</p>
    </div>
)

export default ClarityBox