import React, { Component } from "react";
import { NavBar } from "./components/NavBar";
import "./App.css";
// import { LoginForm } from "./components/LoginForm";
// import { SignUpForm } from "./components/SignUpForm";

// import Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper } from "google-maps-react";

// import child component
import MapContainer from "./components/GoogleApi/MapContainer";
import parks from "./parks.json";
// IMPORTANT: Passing the Google Maps props down to the MapContainer component as "google".
class App extends Component {
  state = {
    parkArr: parks,
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <h1> Parks</h1>
        <MapContainer google={this.props.google} />
      </div>
    );
  }
}
// IMPORTANT: Exporting the App component with the GoogleApiWrapper. You pass it down with an object containing your API key
export default GoogleApiWrapper({
  apiKey: "your-api-key",
})(App);


import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  </Router>
);

export default App;