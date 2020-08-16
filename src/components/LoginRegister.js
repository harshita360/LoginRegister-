import React, { Component } from "react";
import fire from "../config/fire";
import "../App.css";

class LoginRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fireErrors: "",
      formTitle: "Login",
      loginBtn: true,
    };
  }

  login = (e) => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
        this.setState({ fireErrors: error.message });
      });
  };

  register = (e) => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
        this.setState({ fireErrors: error.message });
      });
  };

  getAction = (action) => {
    if (action === "reg") {
      this.setState({
        formTitle: "Register New User",
        loginBtn: false,
        fireErrors: "",
      });
    } else {
      this.setState({ formTitle: "Login", loginBtn: true, fireErrors: "" });
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    let errorNotification = this.state.fireErrors ? (
      <div className="Error"> {this.state.fireErrors} </div>
    ) : null;

    let submitBtn = this.state.loginBtn ? (
      <input
        className="ui red button"
        type="submit"
        onClick={this.login}
        value="Submit"
      />
    ) : (
      <input
        className="ui red button"
        type="submit"
        onClick={this.register}
        value="Register"
      />
    );

    let login_register = this.state.loginBtn ? (
      <button
        className="ui primary button"
        onClick={() => this.getAction("reg")}
      >
        <i class="user icon"></i>
        Register
      </button>
    ) : (
      <button
        className="large ui blue button"
        onClick={() => this.getAction("login")}
      >
        Login
      </button>
    );

    return (
      <div className="form_block">
        <div id="title">{this.state.formTitle}</div>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="body">
            {errorNotification}
            <form>
              <label className="ui large label">Enter Email</label>
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleChange}
                name="email"
              />

              <label className="ui large label">Enter Password</label>

              <input
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                name="password"
              />
              <div>{submitBtn}</div>
            </form>
            <br />
            <br />

            {login_register}
          </div>
        </div>
      </div>
    );
  }
}

export default LoginRegister;
