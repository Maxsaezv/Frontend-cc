import React, { Component } from "react";
import Tabla from "../tabla/Tabla";

class Plantel extends Component {
  constructor(props) {
    super(props);
    

    this.state = {};
  }

  render() {
    const tabla = this.props
    return <Tabla AUX = {tabla}/>;
  }
}

export default Plantel;
