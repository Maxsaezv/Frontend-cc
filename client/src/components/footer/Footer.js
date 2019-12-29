import React, { Component } from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

class Footer extends Component {
  render() {
    return (
      <div>
        <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright © "}
          <Link color="inherit">
            Feria Tics
            {" " + new Date().getFullYear()}
            {"."}
          </Link>{" "}
        </Typography>
      </div>
    );
  }
}

export default Footer;
