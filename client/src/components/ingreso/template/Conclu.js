import React, { Component } from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import api from '../../../api/api';
// React Notification
import { NotificationManager } from 'react-notifications';



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

    if (this.props.values.nombre === "") {
      alert("Faltan campos por rellenar");
      return 0;
    }

    let jugador = {
      player: {
        nombre: this.props.values.nombre,
        nacimiento: this.props.values.nacimiento,
        posicion: this.props.values.posicion,
        pais: this.props.values.pais,
        peso: this.props.values.peso,
        estatura: this.props.values.estatura,
        pie: this.props.values.pie,
        dorsal: this.props.values.dorsal,
        sangre: this.props.values.sangre,
        ficha: {
          clubanterior: this.props.values.clubanterior,
          historiamedicapersonal: {
            enfermedadesprevias: this.props.values.enfermedadesprevias,
            cirugias: this.props.values.cirugias,
            hospitalizaciones: this.props.values.hospitalizaciones,
            alergias: this.props.values.alergias,
            lesionesgravesprevias: this.props.values.lesionesgravesprevias,
            medicamentossuplementos: this.props.values.medicamentossuplementos,
            dolordisconforttoracico: this.props.values.dolordisconforttoracico,
            sincopelipotimia: this.props.values.sincopelipotimia,
            disneafatiga: this.props.values.disneafatiga,
            antecedentesoplo: this.props.values.antecedentesoplo,
            antecedentehipertension: this.props.values.antecedentehipertension
          },
          historiamedicafamiliar: {
            muertesubita: this.props.values.muertesubita,
            enfermedadcardiaca: this.props.values.enfermedadcardiaca,
            enfermedadcardiaca_familiar: this.props.values
              .enfermedadcardiaca_familiar
          },
          examenfisico: {
            pesoIngreso: this.props.values.pesoIngreso,
            estaturaIngreso: this.props.values.estaturaIngreso,
            ritmocardiaco: this.props.values.ritmocardiaco,
            frecuenciacardiaca: this.props.values.frecuenciacardiaca,
            soplos: this.props.values.soplos,
            pulsosperifericos: this.props.values.pulsosperifericos,
            estigmas: this.props.values.estigmas,
            presionarterial: this.props.values.presionarterial,
            faringe_amigdalas: this.props.values.faringe_amigdalas,
            pulmonar: this.props.values.pulmonar,
            abdomen: this.props.values.abdomen,
            hernias: this.props.values.hernias,
            musculoesqueletico: this.props.values.musculoesqueletico
          },
          electrocardiogramareposo: this.props.values.electrocardiogramareposo,
          otrosexamenes: this.props.values.otrosexamenes,
          conclusion: this.props.values.conclusion,
          medico: {
            nombre: "diex",
            rut: "1111"
          }
        }
      }
    };

    console.log("Creando jugador from API!");
    console.log(jugador);
    api
      .createPlayer(jugador)
      .then(res => {
        console.log("Jugador Creado");
        window.location.href = "/plantel";
      })
      .catch(err => {
        console.log("Error al Crear Jugador ");
        alert(err);
        console.log(err);
      });
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <React.Fragment>
          <Typography variant="h3" gutterBottom>
            Conclusión
          </Typography>
          <Grid container spacing={3}style={styles.box}>
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

export default Conclu;
