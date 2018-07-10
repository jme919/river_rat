import React, { Component } from "react";
// import child component
import MapContainer from "../../components/GoogleApi/MapContainer";
import "./ParksPage.css";
import Table from "../../components/Table/Table";
// import parks from "./parks.json";
// IMPORTANT: Passing the Google Maps props down to the MapContainer component as "google".

class ParksPage extends Component {
 
  render() {
    document.body.style.backgroundImage = 'url(/parkimages/Autumn.jpg)';
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    document.body.style.margin = 0;
    document.body.style.padding = 0;
    document.body.style.height = 100 + "%";
    document.body.style.minHeight = 100 + "vh";
    return (
      <div>
        
        <div className="mapWrapper">
        <MapContainer />
        </div>
        <Table />
      </div>
    );
  }
}

export default ParksPage;

