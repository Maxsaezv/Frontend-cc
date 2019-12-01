import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../dashboard/Title';

// Generate Sales Data
function createData(id, Nombre, Edad, Posicion, Camiseta, Estado) {
  return { id, Nombre, Edad, Posicion, Camiseta, Estado};
}

const rows = [
  createData(0, 'DataNombre', 'DataEdad','DataPosicion', 'DataCamiseta', 'DataEstado'),

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
            <TableCell><b>EDAD:</b></TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.Edad}</TableCell>
          ))}
            </TableRow>


          <TableRow>
            <TableCell><b>POSICIÓN:</b></TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.Posicion}</TableCell>
          ))}
          </TableRow>

          <TableRow>
            <TableCell><b>NÚMERO DE CAMISETA:</b></TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.Camiseta}</TableCell>
          ))}
            </TableRow>

            <TableRow>
            <TableCell><b>ESTADO ACTUAL:</b></TableCell>
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