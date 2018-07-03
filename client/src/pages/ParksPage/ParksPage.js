import React, { Component } from "react";
// import child component
import MapContainer from "../../components/GoogleApi/MapContainer";
import "./ParksPage.css";
// import parks from "./parks.json";
// IMPORTANT: Passing the Google Maps props down to the MapContainer component as "google".

class ParksPage extends Component {
 
  render() {
    return (
      <div>
        <div className="mapWrapper">
        <MapContainer />
        </div>
      </div>
    );
  }
}

export default ParksPage;

