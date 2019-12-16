import React, { Component } from "react";
import { Typography, Button, Grid } from "@material-ui/core";

export class Confirmacion extends Component {

  render() {
    const { values } = this.props;
    return (
      <div>
        <Typography variant="h4" gutterBottom>
          El jugador {values.nombre} fue creado correctamente.
        </Typography>

        <Grid item xs={12} align="Right">

            
          <Button  href = {"/plantel"}>
               Continuar 
          </Button>
        </Grid>
      </div>
    );
  }
}

export default Confirmacion;
