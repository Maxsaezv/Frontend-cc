import React, { Component } from "react";
import { Typography, Button, Grid } from "@material-ui/core";

export class Confirmacion extends Component {

  render() {
    let url = window.location.pathname.substring(0, 33);
    const { values } = this.props;
    return (
      <div>
        <Typography variant="h4" gutterBottom>
          Lesión se ha creado con éxito !
        </Typography>

        <Grid item xs={12} align="Right">


          <Button href={url + '/resumen'} color={"black"}>
            Continuar
          </Button>
        </Grid>
      </div>
    );
  }
}

export default Confirmacion;
