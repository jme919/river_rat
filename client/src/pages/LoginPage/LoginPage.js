import React, { Component } from "react";
import "./LoginPage.css";
import axios from "axios";

class LoginPage extends Component {
  state = {
    username: "",
    password: "",
    message: ""
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleFormLogin = () => {
    const { username, password } = this.state;
    this.setState({
      username: "",
      password: ""
    })
    const data = {
      username, password
    }
    console.log(data);
    axios.post("/auth/login", data).then((result) => {
      localStorage.setItem('jwtToken', result.data.token);
      this.setState({ message: '' });
      this.props.history.push('/parkspage')
    })
      .catch((error) => {
        if (error.response.status === 401) {
          this.setState({ message: 'Login failed. Username or password not match' });
        }
      });
  }

  render() {
    const { username, password } = this.state;
    return (
      <form>
        <div className="columns is-centered is-vcentered loginWrapper">
          <div className="column is-4">
            <h4> Login </h4>
            {this.state.message.length
              ? <div>{this.state.message}</div>
              : null
            }
            <div className="field">
              <div className="control has-icons-left has-icons-right">
                <input onChange={this.handleInputChange} value={username} className="input is-rounded is-success" name="username" type="username" placeholder="User Name" />
                <span className="icon is-medium is-left">
                  <i className="fas fa-user"></i>
                </span>
                <span className="icon is-medium is-right">
                  <i className="fas fa-check"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input onChange={this.handleInputChange} value={password} className="input is-rounded is-success" name="password" type="password" placeholder="Password" />
                <span className="icon is-medium is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div className="buttons is-centered">
              <a className="button is-success is-medium">Cancel</a>
              <a onClick={this.handleFormLogin} className="button is-success is-medium">Login</a>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default LoginPage;