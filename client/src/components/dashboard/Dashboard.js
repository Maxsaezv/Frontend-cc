import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {Link} from 'react-router-dom';

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Hola,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                Acabas de inicar sesión en {" "}
                <span style={{ fontFamily: "monospace" }}>MMR</span> app 👏
              </p>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
                color: "white"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable black accent-3"
            >
              Salir
            </button>
            <Link to='/plantel'>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
                color: "white"
              }}
              className="btn btn-large waves-effect waves-light hoverable black accent-3"
            >
              Entrar
            </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);