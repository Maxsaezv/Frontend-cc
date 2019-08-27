import React, { Component } from "react";

class Jugador extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log(this.props.match.params.jugador);
    return (
      <div>
        Jugador
        <p>{this.props.match.params.jugador}</p>
      </div>
    );
  }
}

export default Jugador;
