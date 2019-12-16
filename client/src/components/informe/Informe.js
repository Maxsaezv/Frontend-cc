import React, { Component } from "react";

class Informe extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log(this.props.match.params.jugador);
    return (
      <div>
        Informe
        <p>{this.props.match.params.jugador}</p>
      </div>
    );
  }
}

export default Informe;
