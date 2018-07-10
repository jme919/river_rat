import React, { Component } from "react";
import "./SignupPage.css";
import axios from "axios";
import API from "../../utils/API"

class SignupPage extends Component {
  state = {
    username:"",
    email: "",
    password: ""
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleFormSubmit = () => {
    const { username, email, password } = this.state;
    this.setState({
      username: "",
      email: "",
      password: ""
    })
    const data = {
      username, email, password
    }
    axios.post("/auth/signup", data).then(res => {
      this.props.history.push('/parkspage')
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    const {username, email, password} = this.state;
    return (
      <form method="POST" action="/submit">
        <div className="columns is-centered signupWrapper">
          <div className="column is-4">
            <h4> Signup </h4>
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input onChange = { this.handleInputChange } value={ username } className="input is-rounded is-success" name="username" type="username" placeholder="User Name" />
                <span className="icon is-medium is-left">
                  <i className="fas fa-user"></i>
                </span>
                <span className="icon is-medium is-right">
                  <i className="fas fa-check"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input onChange={this.handleInputChange} value={ email } className="input is-rounded is-success" name="email" type="email" placeholder="Email" />
                <span className="icon is-medium is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-medium is-right">
                  <i className="fas fa-check"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input onChange={this.handleInputChange} value={ password } className="input is-rounded is-success" name="password" type="password" placeholder="Password" />
                <span className="icon is-medium is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div className="buttons is-centered">        
              <a className="button is-success is-medium">Cancel</a>
              <a onClick={this.handleFormSubmit} className="button is-success is-medium">Submit</a>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default SignupPage;