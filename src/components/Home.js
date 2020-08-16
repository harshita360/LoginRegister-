import React, { Component } from "react";
import fire from "../config/fire";

class Home extends Component {
  logout = () => {
    fire.auth().signOut();
  };

  render() {
    return (
      <div>
        <br />
        <h1 style={{ textAlign: "center" }}>You are home!</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button className="large ui blue  button" onClick={this.logout}>
            Logout
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
