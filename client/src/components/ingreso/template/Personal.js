import React, { Component } from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";

export class Personal extends Component {
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
          <Typography
            variant="h4"
            gutterBottom
            align="center"
            style={styles.title}
          >
            Historial Médico Personal
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                id="enfermedadesprevias"
                label="Enfermedades Previas"
                onChange={handleChange("enfermedadesprevias")}
                defaultValue={values.enfermedadesprevias}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="cirugias"
                label="Cirugías"
                onChange={handleChange("cirugias")}
                defaultValue={values.cirugias}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="alergias"
                label="alergias"
                onChange={handleChange("alergias")}
                defaultValue={values.alergias}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lesionesgravesprevias"
                label="Lesiones Graves Previas"
                onChange={handleChange("lesionesgravesprevias")}
                defaultValue={values.lesionesgravesprevias}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="medicamentossuplementos"
                label="Medicamentos"
                onChange={handleChange("medicamentossuplementos")}
                defaultValue={values.medicamentossuplementos}
                fullWidth
              />
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom style={styles.subTitle}>
              Historia Cardiovascular
            </Typography>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="dolordisconforttoracico"
                label="Dolor/disconfort torácico con ejercicio"
                onChange={handleChange("dolordisconforttoracico")}
                defaultValue={values.dolordisconforttoracico}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="sincopelipotimia"
                label="Sincope/Lipotimia"
                onChange={handleChange("sincopelipotimia")}
                defaultValue={values.sincopelipotimia}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="disneafatiga"
                label="Disnea/Fatiga desproporcionada con ejercicio"
                onChange={handleChange("disneafatiga")}
                defaultValue={values.disneafatiga}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="antecedentesoplo"
                label="Antecedente de soplo cardiaco"
                onChange={handleChange("antecedentesoplo")}
                defaultValue={values.antecedentesoplo}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="antecedentehipertension"
                label="Antecedente de Hipertensión Arterial"
                onChange={handleChange("antecedentehipertension")}
                defaultValue={values.antecedentehipertension}
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
    margin: 5,
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

export default Personal;
