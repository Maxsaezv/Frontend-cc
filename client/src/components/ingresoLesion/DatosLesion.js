import React, { Component } from "react";
import {
  MuiThemeProvider,
  Grid,
  Typography,
  TextField,
  Button
} from "@material-ui/core";

import api from '../../api/api'

export class Datos extends Component {
  next = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  handleSubmit = evt => {

    let url = window.location.pathname.substring(0, 33);
    const idplayer = window.location.pathname.substring(9, 33)

    let { values } = this.props
    console.log('url', url, 'idplayer', idplayer, values)

    let lesion = {
      injury: {
        nombre: values.nombre,
        playerId: idplayer,
        fecha: values.fecha,
        reintegroestimado: values.reingresoestimado,
        lateralidad: values.lateralidad,
        gravedad: values.gravedad,
        tipo: values.tipo,
        mecanismo: values.mecanismo,
        entorno: values.entorno,
        dinamica: values.dinamica,
        actividad: values.actividad,
        superficie: values.superficie,
        origen: values.origen,
        clasificacion: values.clasificacion,
        zona: values.zona
      }
    }

    console.log("Creando Lesion from API!");
    console.log(lesion);
    api
      .crearLesion({ player_id: idplayer }, lesion)
      .then(res => {
        console.log("Lesion Creada");
        window.location.href = url + '/resumen';
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
      <div style={styles.container}>
        <MuiThemeProvider>
          <React.Fragment>
            <Typography variant="h4" style={styles.title} align="center" gutterBottom>
              Datos Nueva Lesión
            </Typography>

            <Grid container spacing={3} style={styles.box}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="nombre"
                  name="nombre"
                  label="Diagnóstico Lesión"
                  onChange={handleChange('nombre')}
                  defaultValue={values.nombre}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="fecha"
                  name="fecha"
                  label="Fecha"
                  onChange={handleChange('fecha')}
                  defaultValue={values.fecha}
                  type='date'
                  InputLabelProps={{ shrink: true }}
                  fullWidth

                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="tipo"
                  name="tipo"
                  label="Tipo"
                  onChange={handleChange('tipo')}
                  defaultValue={values.tipo}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="gravedad"
                  name="gravedad"
                  label="Gravedad"
                  onChange={handleChange('gravedad')}
                  defaultValue={values.gravedad}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lateralidad"
                  name="lateralidad"
                  label="Lateralidad"
                  onChange={handleChange('lateralidad')}
                  defaultValue={values.lateralidad}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="zona"
                  name="zona"
                  label="Zona"
                  onChange={handleChange('zona')}
                  defaultValue={values.zona}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="origen"
                  name="origen"
                  label="Origen"
                  onChange={handleChange('origen')}
                  defaultValue={values.origen}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="entorno"
                  name="entorno"
                  label="Entorno"
                  onChange={handleChange('entorno')}
                  defaultValue={values.entorno}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="dinamica"
                  name="dinamica"
                  label="Dinámica"
                  onChange={handleChange('dinamica')}
                  defaultValue={values.dinamica}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="actividad"
                  name="actividad"
                  label="Actividad"
                  onChange={handleChange('actividad')}
                  defaultValue={values.actividad}
                  fullWidth
                />
              </Grid>


              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="mecanismo"
                  name="mecanismo"
                  label="Mecanismo"
                  onChange={handleChange('mecanismo')}
                  defaultValue={values.mecanismo}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="superficie"
                  name="superficie"
                  label="Superficie"
                  onChange={handleChange('superficie')}
                  defaultValue={values.superficie}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="clasificacion"
                  name="clasificacion"
                  label="Clasificación"
                  onChange={handleChange('clasificacion')}
                  defaultValue={values.clasificacion}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="reingresoestimado"
                  name="reingresoestimado"
                  label="Reingreso Estimado"
                  onChange={handleChange('reingresoestimado')}
                  defaultValue={values.reingresoestimado}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  type='date'
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="partidosperdidos"
                  name="partidosperdidos"
                  label="Cantidad Partidos Perdidos"
                  onChange={handleChange('partidosperdidos')}
                  defaultValue={values.partidosperdidos}
                  fullWidth
                />
              </Grid>


              <Grid item xs={12} align='Right'>
                <Button style={styles.button} onClick={this.handleSubmit} align="right" >
                  Enviar
                </Button>
              </Grid>


            </Grid>
          </React.Fragment>
        </MuiThemeProvider>
      </div>
    );
  }
}

const styles = {
  button: {
    margin: 15,
    background: 'black',
    color: 'white',

  },
  title: {
    margin: 15,
  },
  box: {
    margin: 0,
    border: '4px solid',
    borderRadius: "15px"



  },
  container: {
    margin: 15
  }
};

export default Datos;
