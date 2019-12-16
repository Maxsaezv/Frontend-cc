import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../ficha/Title';

// Generate Sales Data
function createData(id, Nombre, Edad, Posicion, Camiseta, Estado) {
  return { id, Nombre, Edad, Posicion, Camiseta, Estado};
}

const rows = [
  createData(0, 'DataNombre', 'DataEdad','DataPosicion', 'DataCamiseta', 'DataEstado'),

];


export default function Orders() {
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
            <TableCell><b>FECHA NACIMIENTO:</b></TableCell>
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
            <TableCell><b>PIE:</b></TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.Camiseta}</TableCell>
          ))}
            </TableRow>

            <TableRow>
            <TableCell><b>PAÍS:</b></TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.Estado}</TableCell>
          ))}
            </TableRow>

            <TableRow>
            <TableCell><b>SANGRE:</b></TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.Estado}</TableCell>
          ))}
            </TableRow><TableRow>
            <TableCell><b>DORSAL:</b></TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.Estado}</TableCell>
          ))}
            </TableRow><TableRow>
            <TableCell><b>ISAPRE:</b></TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.Estado}</TableCell>
          ))}
            </TableRow><TableRow>
            <TableCell><b>PESO:</b></TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.Estado}</TableCell>
          ))}
            </TableRow><TableRow>
            <TableCell><b>ESTADO:</b></TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.Estado}</TableCell>
          ))}
            </TableRow><TableRow>
            <TableCell><b>ESTATURA:</b></TableCell>
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