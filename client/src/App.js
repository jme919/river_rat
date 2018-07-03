import React from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ParksPage from "./pages/ParksPage";
import ParkPage from "./pages/ParkPage";
import Footer from "./components/Footer";
// import { LoginForm } from "./components/LoginForm";
// import { SignUpForm } from "./components/SignUpForm";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";


const App = () => (
  <div className="App">
    <NavBar />
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/parkspage" component={ParksPage} />
          <Route exact path="/parks/:id" component={ParkPage} />
        </Switch>
      </div>
    </Router>
    <Footer/>
  </div>
);

export default App;