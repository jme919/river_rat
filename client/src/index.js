import React from "react";
import ReactDOM from "react-dom";
import 'bulma/css/bulma.css';
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignUpForm";

ReactDOM.render(
  // <Router>
  //   <div>
  //     <Route exact path='/' component={App} />
  //     <Route path="/login" component={Login} />
  //     <Route path="/signup" component={Signup} />
  //     </div>
  // </Router>,
  <App />, 
  document.getElementById("root")
);
registerServiceWorker();
