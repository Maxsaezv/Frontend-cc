import React, { Component } from "react";
import {
  MuiThemeProvider,
  Grid,
  Typography,
  TextField,
  Button
} from "@material-ui/core";

export class Datos extends Component {
  next = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <div style = {styles.container}>
        <MuiThemeProvider>
          <React.Fragment>
            <Typography variant="h4" style = {styles.title} align ="center" gutterBottom>
              Datos Nueva Lesión
            </Typography>

            <Grid container spacing={3} style = {styles.box}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="nombre"
                  name="nombre"
                  label="Diagnóstico Lesión"
                  onChange = {handleChange('nombre')}
                  defaultValue ={values.nombre}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="fecha"
                  name="fecha"
                  label="Fecha"
                  onChange = {handleChange('fecha')}
                  defaultValue ={values.fecha}
                  type='date'
                  fullWidth
                  
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="tipo"
                  name="tipo"
                  label="Tipo"
                  onChange = {handleChange('tipo')}
                  defaultValue ={values.tipo}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="gravedad"
                  name="gravedad"
                  label="Gravedad"
                  onChange = {handleChange('gravedad')}
                  defaultValue ={values.gravedad}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lateralidad"
                  name="lateralidad"
                  label="Lateralidad"
                  onChange = {handleChange('lateralidad')}
                  defaultValue ={values.lateralidad}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="zona"
                  name="zona"
                  label="Zona"
                  onChange = {handleChange('zona')}
                  defaultValue ={values.zona}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="origen"
                  name="origen"
                  label="Origen"
                  onChange = {handleChange('origen')}
                  defaultValue ={values.origen}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="entorno"
                  name="entorno"
                  label="Entorno"
                  onChange = {handleChange('entorno')}
                  defaultValue ={values.entorno}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="dinamica"
                  name="dinamica"
                  label="Dinámica"
                  onChange = {handleChange('dinamica')}
                  defaultValue ={values.dinamica}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="actividad"
                  name="actividad"
                  label="Actividad"
                  onChange = {handleChange('actividad')}
                  defaultValue ={values.actividad}
                  fullWidth
                />
              </Grid>
            

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="mecanismo"
                  name="mecanismo"
                  label="Mecanismo"
                  onChange = {handleChange('mecanismo')}
                  defaultValue ={values.mecanismo}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="superficie"
                  name="superficie"
                  label="Superficie"
                  onChange = {handleChange('superficie')}
                  defaultValue ={values.superficie}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="clasificacion"
                  name="clasificacion"
                  label="Clasificación"
                  onChange = {handleChange('clasificacion')}
                  defaultValue ={values.clasificacion}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="reingresoestimado"
                  name="reingresoestimado"
                  label="Reingreso Estimado"
                  onChange = {handleChange('reingresoestimado')}
                  defaultValue ={values.reingresoestimado}
                  fullWidth
                  type = 'date'
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="partidosperdidos"
                  name="partidosperdidos"
                  label="Cantidad Partidos Perdidos"
                  onChange = {handleChange('partidosperdidos')}
                  defaultValue ={values.partidosperdidos}
                  fullWidth
                />
              </Grid>

          
              <Grid item xs = {12} align='Right'>
                <Button style = {styles.button} onClick = {this.next} align = "right" >
                  Next
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
  button : {
    margin:15,
    background : 'black',
    color : 'white',
    
  },
  title : {
    margin : 15,
  },
  box :  {
    margin: 0,
    border: '4px solid',
    borderRadius:"15px"

    

  },
  container :{
    margin :15
  }
};

export default Datos;
