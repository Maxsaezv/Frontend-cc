import React, { Component } from "react";
import Datos from "./template/Datos";
import Personal from "./template/Personal";
import Familiar from "./template/Familiar";
import Fisico from "./template/Fisico";
import Conclu from "./template/Conclu";
import Confirmacion from "./template/Confirmacion";
import { Grid } from "@material-ui/core";

export class AddPlayer extends Component {
  state = {
    step: 1,
    nombre: "",
    nacimiento: "",
    pais: "",
    posicion: "",
    sangre: "",
    isapre: "",
    status: "",
    pie: "",
    estatura: "",
    peso: "",
    dorsal: "",
    clubanterior: "",
    enfermedadesprevias: "",
    cirugias: "",
    hospitalizaciones: "",
    alergias: "",
    lesionesgravesprevias: "",
    medicamentossuplementos: "",
    dolordisconforttoracico: "",
    sincopelipotimia: "",
    disneafatiga: "",
    antecedentesoplo: "",
    antecedentehipertension: "",
    muertesubita: "",
    enfermedadcardiaca: "",
    enfermedadcardiaca_familiar: "",
    ritmocardiaco: "",
    frecuenciacardiaca: "",
    soplos: "",
    pulsosperifericos: "",
    estigmas: "",
    presionarterial: "",
    faringe_amigdalas: "",
    pulmonar: "",
    abdomen: "",
    hernias: "",
    musculoesqueletico: "",
    electrocardiogramareposo: "",
    otrosexamenes: "",
    conclusion: ""
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value }, () => console.log(this.state));
  };

  render() {
    const { step } = this.state;

    const {
      nombre,
      nacimiento,
      pais,
      posicion,
      sangre,
      isapre,
      status,
      pie,
      estatura,
      peso,
      dorsal,
      clubanterior,
      enfermedadesprevias,
      cirugias,
      hospitalizaciones,
      alergias,
      lesionesgravesprevias,
      medicamentossuplementos,
      dolordisconforttoracico,
      sincopelipotimia,
      disneafatiga,
      antecedentesoplo,
      antecedentehipertension,
      muertesubita,
      enfermedadcardiaca,
      enfermedadcardiaca_familiar,
      ritmocardiaco,
      frecuenciacardiaca,
      soplos,
      pulsosperifericos,
      estigmas,
      presionarterial,
      faringe_amigdalas,
      pulmonar,
      abdomen,
      hernias,
      musculoesqueletico,
      electrocardiogramareposo,
      otrosexamenes,
      conclusion
    } = this.state;

    const values = {
      nombre,
      nacimiento,
      pais,
      posicion,
      sangre,
      isapre,
      status,
      pie,
      estatura,
      peso,
      dorsal,
      clubanterior,
      enfermedadesprevias,
      cirugias,
      hospitalizaciones,
      alergias,
      lesionesgravesprevias,
      medicamentossuplementos,
      dolordisconforttoracico,
      sincopelipotimia,
      disneafatiga,
      antecedentesoplo,
      antecedentehipertension,
      muertesubita,
      enfermedadcardiaca,
      enfermedadcardiaca_familiar,
      ritmocardiaco,
      frecuenciacardiaca,
      soplos,
      pulsosperifericos,
      estigmas,
      presionarterial,
      faringe_amigdalas,
      pulmonar,
      abdomen,
      hernias,
      musculoesqueletico,
      electrocardiogramareposo,
      otrosexamenes,
      conclusion
    };

    switch (step) {
      case 1:
        return (
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item style={{ maxWidth: "80%" }}>
              <Datos
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item style={{ maxWidth: "80%" }}>
              <Personal
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            </Grid>
          </Grid>
        );
      case 3:
        return (
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item style={{ maxWidth: "80%" }}>
              <Familiar
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            </Grid>
          </Grid>
        );
      case 4:
        return (
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item style={{ maxWidth: "70%" }}>
              <Fisico
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            </Grid>
          </Grid>
        );
      case 5:
        return (
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item style={{ maxWidth: "80%" }}>
              <Conclu
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
            </Grid>
          </Grid>
        );
      case 6:
        return <Confirmacion values={values} />;
      default:
        return " ERROR ";
    }
  }
}

export default AddPlayer;

/* <main className={classes.layout}>
<Paper className={classes.paper}>
  <Typography component="h1" variant="h4" align="center">
    Ingreso de Jugadores
  </Typography>
  <Stepper activeStep={activeStep} className={classes.stepper}>
    {steps.map(label => (
      <Step key={label}>
        <StepLabel>{label}</StepLabel>
      </Step>
    ))}
  </Stepper> */
