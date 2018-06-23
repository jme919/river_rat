import React, { Component } from "react";
import { NavBar } from "./components/NavBar";
import "./App.css";
import { GoogleApiWrapper } from "google-maps-react";
import MapContainer from "./MapContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <h1> Google Maps API + React </h1> //title
        //IMPORTANT: Passing the Google Maps props down to the MapContainer component as "google".
        <MapContainer google = { this.props.google } />
      </div>
    );
  }
}
// IMPORTANT: Exporting the App component with the GoogleApiWrapper. You pass it down with an object containing your API key
export default GoogleApiWrapper ({
  apiKey: "your-api-key",
}) (App);
