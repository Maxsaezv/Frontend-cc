import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { useState } from 'react';

// Generate Sales Data
function createData(id, MuerteSubita, ECardiacaDisc, ECardiacaConoc) {
  return { id, MuerteSubita, ECardiacaDisc, ECardiacaConoc };
}

const rows = [
  createData(0, 'DataMuerteSubita Familiares', 'Data Enfermedad Cardiaca que genere discapacidad', 'Data Enfermedad Cardiaca conocida en familiares'),

];


export default function Orders(props) {
  const [state, setState] = useState(props);
  console.log('Familiar', state)



  let hm = state.data.historiamedicafamiliar
  return (
    <React.Fragment>
      <Title>Historia Médica Familiar</Title>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell> <b> Interrogante Médica</b></TableCell>
            <TableCell align='center'><b>Resultado</b></TableCell>
          </TableRow>


          <TableRow>
            <TableCell>Muerte súbita (cardiovascular) en familiares de primer grado (padres, hermanos, tíos): </TableCell>

            <TableCell align='center'>{hm.muertesubita}</TableCell>

          </TableRow>


          <TableRow>
            <TableCell>Enfermedad cardiaca que cause discapacidad en familiares de primer grado:</TableCell>

            <TableCell align='center'>{hm.enfermedadcardiaca}</TableCell>

          </TableRow>


          <TableRow>
            <TableCell>Enfermedad cardiaca conocida en familiares (miocardiopatía, arritmias, canalopatías, Sd Marfán): </TableCell>

            <TableCell align='center'>{hm.enfermedadcardiaca_familiar}</TableCell>

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