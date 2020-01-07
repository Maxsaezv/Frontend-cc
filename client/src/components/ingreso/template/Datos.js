import React, { Component } from "react";
import {
  MuiThemeProvider,
  Grid,
  Typography,
  TextField,
  Button
} from "@material-ui/core";


const posicion = [
  {
    label: 'Portero',
    value: 'PO'
  },
  {
    label: 'Defensa',
    value: 'DEF'
  },
  {
    label: 'Medicampista',
    value: 'MC'
  },
  {
    label: 'Delantero',
    value: 'DEL'
  }
]
const pie = [
  {
    label: 'Derecho',
    value: 'Derecho'
  },
  {
    label: 'Izquierdo',
    value: 'Izquierdo'
  }
]
const sangre = [
  {
    label: 'A+',
    value: 'A+'
  },
  {
    label: 'A-',
    value: 'A-'
  },
  {
    label: 'B+',
    value: 'B+'
  },
  {
    label: 'B-',
    value: 'B-'
  },
  {
    label: 'O+',
    value: 'O+'
  },
  {
    label: 'O-',
    value: 'O-'
  },
  {
    label: 'AB+',
    value: 'AB+'
  },
  {
    label: 'AB-',
    value: 'AB-'
  }
]



export class Datos extends Component {
  next = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <div style={styles.container}>
        <MuiThemeProvider>
          <React.Fragment>
            <Typography variant="h4" style={styles.title} align="center" gutterBottom>
              Datos Personales
            </Typography>

            <Grid container spacing={3} style={styles.box}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="nombre"
                  name="nombre"
                  label="Nombre Completo"
                  onChange={handleChange('nombre')}
                  defaultValue={values.nombre}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="nacimiento"
                  name="nacimiento"
                  label="Fecha de Nacimiento"
                  onChange={handleChange('nacimiento')}
                  defaultValue={values.nacimiento}
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  select
                  id="posicion"
                  name="posicion"
                  label="Posición"
                  onChange={handleChange('posicion')}
                  value={values.posicion}
                  fullWidth
                >
                  {posicion.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}

                </TextField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  select
                  id="pie"
                  name="pie"
                  label="Pie Dominante"
                  onChange={handleChange('pie')}
                  value={values.pie}
                  fullWidth
                >
                  {pie.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}

                </TextField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  select
                  id="sangre"
                  name="sangre"
                  label="Tipo de sangre"
                  onChange={handleChange('sangre')}
                  value={values.sangre}
                  fullWidth
                >
                  {sangre.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="pais"
                  name="pais"
                  label="País"
                  onChange={handleChange('pais')}
                  defaultValue={values.pais}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="dorsal"
                  name="dorsal"
                  label="Dorsal"
                  onChange={handleChange('dorsal')}
                  defaultValue={values.dorsal}
                  type="number"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="clubanterior"
                  name="clubanterior"
                  label="Club de procedencia"
                  onChange={handleChange('clubanterior')}
                  defaultValue={values.clubanterior}
                  fullWidth
                />
              </Grid>


              <Grid item xs={12} align='Right'>
                <Button style={styles.button} onClick={this.next} align="right" >
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
