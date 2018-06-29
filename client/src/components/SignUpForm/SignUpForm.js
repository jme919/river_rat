import React, { Component } from "react";
import "./SignUpForm.css";

class Form extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    email: "",
    password: ""
  };

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;
    // const name = "username";
    // console.log(event);
    // Set the state for the appropriate input field
    console.log(`Setting state.${name} to ${value}`);
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();
    alert(`Username: ${this.state.username}\nEmail: ${this.state.email}\nPassword: ${this.state.password}`);
    this.setState({ username: "", email: "", password: "" });
  };

  render() {
    return (
      <form>
        <p>Username: {this.state.username}</p>
        <p>Email: {this.state.email}</p>
        <p>Password: {this.state.password}</p>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <input
          type="eamil"
          placeholder="Email"
          name="email"
          value={this.state.email}
          onChange={this.handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleFormSubmit}>Submit</button>
        <button onClick={this.handleCancel}>Cancel</button>
      </form>
    );
  }
}

export default Form;