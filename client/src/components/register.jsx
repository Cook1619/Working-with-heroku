import React, { Component, Fragment } from "react";
import * as userServices from "../services/registerusers";
import { Link } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: ""
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleName = this.handleName.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  handleEmail(event) {
    this.setState({
      email: event.target.value
    });
  }
  handlePassword(event) {
    this.setState({
      password: event.target.value
    });
  }
  handleName(event) {
    this.setState({
      name: event.target.value
    });
  }

  addUser() {
    let userInfo = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    console.log(userInfo);
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.password === ""
    ) {
      alert("Please Fill out the form");
    } else {
      userServices.insert(userInfo);
      alert("Thank you for registering!").catch(error => console.log(error));
    }
  }

  render() {
    return (
      <Fragment>
        <div className="row padding-top">
          <div className="card col-6 bg-dark d-flex mx-auto margin-bottom register p-2">
            <form className="m-2">
              <div className="form-group row">
                <div className="col">
                  <input
                    htmlFor="name"
                    type="name"
                    className="form-control rounded-0"
                    id="name"
                    placeholder="Username"
                    onChange={this.handleName}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col">
                  <input
                    htmlFor="email"
                    type="email"
                    className="form-control rounded-0"
                    id="email"
                    placeholder="Email"
                    onChange={this.handleEmail}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col">
                  <input
                    htmlFor="password"
                    type="password"
                    className="form-control rounded-0 mb-3"
                    id="password"
                    placeholder="Password"
                    onChange={this.handlePassword}
                  />
                </div>
              </div>
              <div className="form-group row d-flex justify-content-center">
                <div>
                  <Link
                    className="btn btn-success rounded-0 mt-0"
                    to="/login"
                    type="submit"
                    onClick={this.addUser}
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Register;
