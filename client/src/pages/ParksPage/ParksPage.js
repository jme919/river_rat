import React, { Component } from "react";
// import Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper } from "google-maps-react";

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
        <MapContainer google={this.props.google} />
      </div>
    );
  }
}
// IMPORTANT: Exporting the App component with the GoogleApiWrapper. You pass it down with an object containing your API key
export default GoogleApiWrapper({
  apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo",
})(ParksPage);


