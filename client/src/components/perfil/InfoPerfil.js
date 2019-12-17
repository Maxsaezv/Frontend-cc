import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../resumen/Title';

// Generate Sales Data
function createData(id, Nombre, Posicion, Edad, Estatura, Peso, Pais, Pie, Isapre, Alergias, Sangre, Dorsal, Estado ) {
  return { id, Nombre, Posicion, Edad, Estatura, Peso, Pais, Pie, Isapre, Alergias, Sangre, Dorsal, Estado };
}

const rows = [
  createData(0, 'DataNombre','DataPosicion', 'DataEdad','DataEstatura', 'DataPeso', 'DataPais',
   'DataPie', 'DataIsapre', 'DataAlergias', 'DataSangre','DataCamiseta', 'DataEstado'),

];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
   <React.Fragment>
    <Title>Información General</Title>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell><b>NOMBRE:</b> </TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.Nombre}</TableCell>
          ))}
          </TableRow>


          <TableRow>
            <TableCell><b>POSICIÓN:</b></TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.Posición}</TableCell>
          ))}
            </TableRow>


          <TableRow>
            <TableCell><b>EDAD:</b></TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.Edad}</TableCell>
          ))}
          </TableRow>

          <TableRow>
            <TableCell><b>ESTATURA:</b></TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.Estatura}</TableCell>
          ))}
            </TableRow>

            <TableRow>
            <TableCell><b>PESO:</b></TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.Peso}</TableCell>
          ))}
            </TableRow>

            <TableRow>
            <TableCell><b>PAÍS:</b></TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.Pais}</TableCell>
          ))}
            </TableRow>
            
            <TableRow>
            <TableCell><b>PIE:</b></TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.Pie}</TableCell>
          ))}
            </TableRow><TableRow>
            <TableCell><b>ISAPRE:</b></TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.Isapre}</TableCell>
          ))}
            </TableRow><TableRow>
            <TableCell><b>ALERGIAS:</b></TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.Alergias}</TableCell>
          ))}
            </TableRow><TableRow>
            <TableCell><b>SANGRE:</b></TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.Sangre}</TableCell>
          ))}
            </TableRow>

            <TableRow>
            <TableCell><b>DORSAL:</b></TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.Dorsal}</TableCell>
          ))}
            </TableRow>

            <TableRow>
            <TableCell><b>ESTADO:</b></TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.Estado}</TableCell>
          ))}
            </TableRow>

        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}