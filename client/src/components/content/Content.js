import React, { Component } from "react";

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log(this.props.match.params.jugador);
    return (
      <div>
        Content
        <p>{this.props.match.params.jugador}</p>
      </div>
    );
  }
}

export default Content;
