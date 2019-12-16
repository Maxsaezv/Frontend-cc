import React, { Component } from "react";
import { Grid, TextField, Typography, Button } from "@material-ui/core";

export class Fisico extends Component {
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
      <div className={styles.box}>
        <React.Fragment>
          <Typography variant="h4" gutterBottom style={styles.title}>
            Examen Fisico
          </Typography>

          <Grid container spacing={3} style={styles.box}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="peso"
                label="Peso"
                onChange={handleChange("peso")}
                defaultValue={values.peso}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="estatura"
                label="Estatura"
                onChange={handleChange("estatura")}
                defaultValue={values.estatura}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom style={styles.subTitle}>
                Cardiovascular
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="ritmocardiaco"
                label="Ritmo Cardiaco"
                onChange={handleChange("ritmocardiaco")}
                defaultValue={values.ritmocardiaco}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="frecuenciacardiaca"
                label="FC"
                onChange={handleChange("frecuenciacardiaca")}
                defaultValue={values.frecuenciacardiaca}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="soplos"
                label="Soplos"
                onChange={handleChange("soplos")}
                defaultValue={values.soplos}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="pulsosperifericos"
                label="Pulsos Perifericos."
                onChange={handleChange("pulsosperifericos")}
                defaultValue={values.pulsosperifericos}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="estigmasMarfan "
                label="Estigmas de Sd. Marfán"
                onChange={handleChange("estigmas")}
                defaultValue={values.estigmas}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="presionarterial"
                label="Presión Arterial"
                onChange={handleChange("presionarterial")}
                defaultValue={values.presionarterial}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="faringe"
                label="Faringe/Amígdalas"
                onChange={handleChange("faringe_amigdalas")}
                defaultValue={values.faringe_amigdalas}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="pulmonar"
                label="Pulmonar"
                onChange={handleChange("pulmonar")}
                defaultValue={values.pulmonar}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="abdomen"
                label="Abdomen"
                onChange={handleChange("abdomen")}
                defaultValue={values.abdomen}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="hernias"
                label="Hernias"
                onChange={handleChange("hernias")}
                defaultValue={values.hernias}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="musculoEsqueletico"
                label="Musculoesqueletico"
                onChange={handleChange("musculoesqueletico")}
                defaultValue={values.musculoesqueletico}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="electrocardiogramareposo"
                label="Electrocardiograma de Reposo"
                onChange={handleChange("electrocardiogramareposo")}
                defaultValue={values.electrocardiogramareposo}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} align="Right">
              <Button style={styles.button} onClick={this.back}>
                Back
              </Button>
              <Button style={styles.button} onClick={this.next}>
                Next
              </Button>
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
    margin: 10,
    border: "4px solid"
  },
  container: {
    margin: 15
  },
  subTitle: {
    marginTop: 30,
    marginLeft: 50
  }
};

export default Fisico;
