import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { Redirect } from 'react-router-dom';
import './index.css';


class MapContainer extends Component {

  // ======================
  // ADD LOCATIONS TO STATE
  // ======================
  state = {
    locations: [
      { _id: 8, name: "Ancarrow's Landing", title: "Ancarrow's Landing", location: { lat: 37.508304, lng: -77.427166 } },
      { _id: 7, name: "North Bank Park (Texas Beach)", title: "North Bank Park (Texas Beach)", location: { lat: 37.529129, lng: -77.469729 } },
      { _id: 6, name: "The Wetlands", title: "The Wetlands", location: { lat: 37.547256, lng: -77.509147 } },
      { _id: 1, name: "Pony Pasture", title: "Pony Pasture", location: { lat: 37.5550862, lng: -77.520472 } },
      { _id: 4, name: "T. Tyler Potterfield Memorial Bridge (T. Pott.)", title: "T. Tyler Potterfield Memorial Bridge (T. Pott.)", location: { lat: 37.532384, lng: -77.445052 } },
      { _id: 3, name: "Manchester Climbing Wall", title: "Manchester Climbing Wall", location: { lat: 37.527711, lng: -77.444877 } },
      { _id: 2, name: "Pipeline", title: "Pipeline", location: { lat: 37.532534, lng: -77.434311 } },
      { _id: 5, name: "Huguenot Flatwater", title: "Huguenot Flatwater", location: { lat: 37.559374, lng: -77.543602 } }
    ],
    redirectTo: null,
  }

  onMarkerClick(marker, loc) {
    console.log('Marker clicked: %O %O', marker, loc);
    this.setState({ redirectTo: `/parks/${loc._id}` });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo} />;
    }

    const mapCenter = { lat: 37.536578, lng: -77.478112 };
    
    return (
      <Map google={this.props.google} initialCenter={mapCenter} mapType="roadmap" zoom={12}>
        {this.state.locations.map((loc) => (
          <Marker key={loc._id} name={loc.name} title={loc.title} position={loc.location} onClick={(marker) => this.onMarkerClick(marker, loc)} />
        ))}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAeLNjXRxBXzKx0oC1s6R2lT66bstngaSs",
  LoadingContainer: (props) => (
    <div style={{ width: '500px', height: '500px' }}>
      loading map...
    </div>
  ),
})(MapContainer);