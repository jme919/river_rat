import React, { Component } from "react";
import "./Activities.css";

const Activities = props => (
    <div className="activities-databox">
        <p className="activities-heading">Activity Suggestions</p>
        <div className="activities-box">
            <div className="activities-fishing">Fishing: 
                <div>{props.fishing}</div>
            </div>
            <div className="activities-kayaking">Kayaking: 
                <div>{props.kayaking}</div>
            </div>
            <div className="activities-paddleboarding">Paddleboarding: 
                <div>{props.paddleboarding}</div>
            </div>
            <div className="activities-floating">Floating: 
                <div>{props.floating}</div>
            </div>
        </div>    
    </div>
)

export default Activities