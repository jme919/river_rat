import React from "react";
import "./ParkWrap.css";

const ParkWrap = props =>(
    <section>
        <div className="container is-fluid ">
            <div className="columns is-centered ">
                <div className="column is-half ">
                {props.children}
                </div>
            </div>
        </div>
    </section>



)



export default ParkWrap;