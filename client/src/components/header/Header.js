import React, { Component } from "react";

import Logo from "../../assets/images/Logo.png";
import { Grid, Typography } from "@material-ui/core";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let url = window.location.pathname;
    console.log(url);
    return (
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={3} wrap>
     
        </Grid>

        
      </Grid>
    );
  }
}

export default Header;
