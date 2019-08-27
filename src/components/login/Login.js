import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onSubmit = e => {
    e.preventDefault();
    const form = e.target;
    console.log(form.name.value);

    if (form.name.value === "admin") {
      alert("Success");
      this.props.history.push("/plantel");
    } else {
      alert("Try Again");
    }
  };

  render() {
    return (
      <div className="login">
        <form onSubmit={this.onSubmit}>
          <input name="name" placeholder="name" type="name" />
          <br />
          <input placeholder="email" type="email" />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
