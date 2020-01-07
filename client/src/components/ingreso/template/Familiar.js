import React, { Component } from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";

export class Familiar extends Component {
  next = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <React.Fragment>
          <Typography variant="h3" gutterBottom>
            Historial Médico Personal
          </Typography>

          <Grid container spacing={3}style={styles.box}>
            <Grid item xs={12}>
              <TextField
                required
                id="muertesubita"
                label="Muerte Súbita en familiares de primer grado menores de 50"
                onChange={handleChange("muertesubita")}
                defaultValue={values.muertesubita}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                id="enfermedadcardiaca"
                label="Enfermedad Cardiaca que cause discapacidad en familiares de primer grado"
                onChange={handleChange("enfermedadcardiaca")}
                defaultValue={values.enfermedadcardiaca}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                id="enfermedadcardiaca_familiar"
                label="Enfermedad cardiaca conocida en familiares"
                onChange={handleChange("enfermedadcardiaca_familiar")}
                defaultValue={values.enfermedadcardiaca_familiar}
                fullWidth
              />

              <Grid item xs={12} align="Right">
                <Button style={styles.button} onClick={this.back}>
                  Back
                </Button>
                <Button style={styles.button} onClick={this.next}>
                  Next
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </React.Fragment>
      </div>
    );
  }
}

const styles = {
  button: {
    margin: 15,
    background: "black",
    color: "white"
  },
  title: {
    margin: 15
  },
  box: {
    margin: 5,
    border: "4px solid",
    borderRadius: "15px"
  },
  container: {
    margin: 15
  },
  subTitle: {
    marginTop: 30,
    marginLeft: 50
  }
};
export default Familiar;
