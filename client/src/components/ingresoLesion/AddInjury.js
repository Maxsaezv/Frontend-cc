import React, { Component } from "react";
import DatosLesion from "./DatosLesion";
import Confirmacion from "./ConfirmacionLesion";
import { Grid } from "@material-ui/core";

export class AddInjury extends Component {
  state = {
    step: 1,
    nombre: "",
    fecha:"",
    tipo: "",
    gravedad: "",
    lateralidad: "",
    zona: "",
    origen: "",
    entorno: "",
    dinamica: "",
    actividad: "",
    mecanismo: "",
    superficie: "",
    clasificacion: "",
    reingresoestimado: "",
    partidosperdidos: "",
    
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
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;

    const {
        nombre,
        fecha,
        tipo,
        gravedad,
        lateralidad,
        zona,
        origen,
        entorno,
        dinamica,
        actividad,
        mecanismo,
        superficie,
        clasificacion,
        reingresoestimado,
        partidosperdidos
    } = this.state;

    const values = {
        nombre,
        fecha,
        tipo,
        gravedad,
        lateralidad,
        zona,
        origen,
        entorno,
        dinamica,
        actividad,
        mecanismo,
        superficie,
        clasificacion,
        reingresoestimado,
        partidosperdidos
    };

    switch (step) {
      case 1:
        return (
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item style={{ maxWidth: "80%" }}>
              <DatosLesion
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
              />
            </Grid>
          </Grid>
        );
      
      case 2:
        return <Confirmacion values={values} />;
      default:
        return " ERROR ";
    }
  }
}

export default AddInjury;

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
