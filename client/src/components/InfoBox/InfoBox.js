import React from 'react';
import "./InfoBox.css";

const InfoBox = props => (
    <section>
        <div id="infoBox" className="container is-fluid ">
            <div className=" home-data columns is-centered ">
                <div className="column">
                    {props.children}
                </div>
            </div>
        </div>
    </section>



)



export default InfoBox;