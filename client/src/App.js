import React from "react";
// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import { Link } from "react-router-dom";
// import axios from "axios";
import NavBar from "./components/NavBar";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ParksPage from "./pages/ParksPage";
import ParkPage from "./pages/ParkPage";
import Outfitters from "./pages/Outfitters";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Footer from "./components/Footer/Footer"
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fathermometerthreequarters } from '@fortawesome/free-solid-svg-icons'

// library.add(fathermometerthreequarters)
// import auth from "/routes/auth";
// app.use('/api/auth', auth);

// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: []
//     };
//   }

// componentDidMount(); {
//   axios.defaults.headers.common ["Authorization"] = localStorage.getItem("jwtToken");
//   axios.get("/api/user")
//     .then(res => {
//       this.setState({ users: res.data });
//       console.log(this.state.users);
//     })
//     .catch((error) => {
//       if(error.response.status ===401) {
//         this.props.history.push("/login");
//       }
//     });
// }
// logout = () => {
//   localStorage.removeItem("jwtToken");
//   window.location.reload();
// }


  const App = () => (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/parkspage" component={ParksPage} />
            <Route path="/parks/:id" component={ParkPage} />
            <Route path="/outfitters" component={Outfitters} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignupPage} />
          </Switch>
        </div>  
      </Router>
      <Footer />
    </div>
  );

export default App;