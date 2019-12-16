import React, { Component } from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import api from '../../../api/api';



export class Conclu extends Component {
  next = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };



  handleSubmit = evt => {
    evt.preventDefault();

    let jugador = {
        jugador: {
          nombre: this.props.values.nombre
          // nacimiento: this.props.values.nacimiento,
          // pais: this.props.values.pais,
          // posicion: this.props.values.posicion,
          // sangre: this.props.values.sangre,
          // isapre: this.props.values.isapre,
          // status: this.props.values.status,
          // pie: this.props.values.pie,
          // estatura: this.props.values.estatura,
          // peso: this.props.values.peso,
          // dorsal: this.props.values.dorsal,
          // clubanterior: this.props.values.clubanterior,
          // enfermedadesprevias: this.props.values.enfermedadesprevias,
          // cirugias: this.props.values.cirugias,
          // hospitalizaciones: this.props.values.hospitalizaciones,
          // alergias: this.props.values.alergias,
          // lesionesgravesprevias: this.props.values.lesionesgravesprevias,
          // medicamentossuplementos: this.props.values.medicamentossuplementos,
          // dolordisconforttoracico: this.props.values.dolordisconforttoracico,
          // sincopelipotimia: this.props.values.sincopelipotimia,
          // disneafatiga: this.props.values.disneafatiga,
          // antecedentesoplo: this.props.values.antecedentesoplo,
          // antecedentehipertension: this.props.values.antecedentehipertension,
          // muertesubita: this.props.values.muertesubita,
          // enfermedadcardiaca: this.props.values.enfermedadcardiaca,
          // enfermedadcardiaca_familiar: this.props.values.enfermedadcardiaca_familiar,
          // ritmocardiaco: this.props.values.ritmocardiaco,
          // frecuenciacardiaca: this.props.values.frecuenciacardiaca,
          // soplos: this.props.values.soplos,
          // pulsosperifericos: this.props.values.pulsosperifericos,
          // estigmas: this.props.values.estigmas,
          // presionarterial: this.props.values.presionarterial,
          // faringe_amigdalas: this.props.values.faringe_amigdalas,
          // pulmonar: this.props.values.pulmonar,
          // abdomen: this.props.values.abdomen,
          // hernias: this.props.values.hernias,
          // musculoesqueletico: this.props.values.musculoesqueletico,
          // electrocardiogramareposo: this.props.values.electrocardiogramareposo,
          // otrosexamenes: this.props.values.otrosexamenes,
          // conclusion: this.props.values.conclusion
        }
      };
  console.log('Creando jugador from API!')
  console.log(jugador)
    api
        .createPlayer(jugador)
        .then(res => {

            console.log('Jugador Creado')
            console.log(res)
            
        })
        .catch(err => {
            console.log('Error al Crear Jugador ')
            console.log(err)
            
        })
}

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <React.Fragment>
          <Typography variant="h3" gutterBottom>
            Conclusión
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                multiline
                rows="5"
                id="conclusion"
                variant="outlined"
                onChange={handleChange("conclusion")}
                defaultValue={values.conclusion}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} align="Right">
              <Button style={styles.button} onClick={this.back}>
                Back
              </Button>
              <Button style={styles.button} onClick={this.handleSubmit}>
                Enviar
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

export default Conclu;
