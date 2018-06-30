import React, { Component } from "react";
// import child component
import MapContainer from "../../components/GoogleApi/MapContainer";
// import parks from "./parks.json";
// IMPORTANT: Passing the Google Maps props down to the MapContainer component as "google".

class ParksPage extends Component {
  // state = {
  //   parkArr: parks,
  // }
  render() {
    return (
      <div>
        <h1>Parks</h1>
        <MapContainer />
      </div>
    );
  }
}

export default ParksPage;

