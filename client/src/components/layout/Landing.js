import React, { Component } from "react";
import { Link } from "react-router-dom";
class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Gestor</b> {" "}
              <span style={{ fontFamily: "monospace" }}>Médico</span>
            </h4>
            <p className="flow-text grey-text text-darken-1">
              Medical Management Reporter 2019 Colo-Colo
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable black accent-3"
              >
                Registro
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Acceder
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;