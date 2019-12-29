import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { useState } from 'react';


// Generate Sales Data
function createData(id) {
  return {
    id
  };
}

const rows = [
  createData(0),

];


export default function Orders(props) {
  const [state, setState] = useState(props);

  console.log('Personal', state)
  let hm = state.data.historiamedicapersonal
  return (
    <React.Fragment>
      <Title>Historia Médica Personal</Title>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell> <b> Interrogante Médica</b></TableCell>
            <TableCell align='center'><b>Resultado</b></TableCell>
          </TableRow>


          <TableRow>
            <TableCell>Enfermedades Previas:</TableCell>

            <TableCell align='center'>{hm.enfermedadesprevias}</TableCell>

          </TableRow>


          <TableRow>
            <TableCell>Cirugía:</TableCell>

            <TableCell align='center'>{hm.cirugia}</TableCell>

          </TableRow>


          <TableRow>
            <TableCell>Hospitalizaciones:</TableCell>

            <TableCell align='center'>{hm.hospitalizaciones}</TableCell>

          </TableRow>


          <TableRow>
            <TableCell>Alergias:</TableCell>

            <TableCell align='center'>{hm.alergias}</TableCell>

          </TableRow>


          <TableRow>
            <TableCell>Lesiones graves previas (>1 mes sin jugar):</TableCell>

            <TableCell align='center'>{hm.lesionesgravesprevias}</TableCell>

          </TableRow>


          <TableRow>
            <TableCell>Medicamentos / Suplementos:</TableCell>

            <TableCell align='center'>{hm.medicamentossuplementos}</TableCell>

          </TableRow>

          <TableRow>
            <TableCell> <b><p> HISTORIA CARDIOVASCULAR </p></b></TableCell>
          </TableRow>


          <TableRow>
            <TableCell>Dolor/disconfort torácico con ejercicio:</TableCell>

            <TableCell align='center'>{hm.dolordisconforttoracico}</TableCell>

          </TableRow>


          <TableRow>
            <TableCell>Síncope/Lipotimia:</TableCell>

            <TableCell align='center'>{hm.sincopelipotimia}</TableCell>

          </TableRow>

          <TableRow>
            <TableCell>Disnea/Fatiga desproporcionada con ejercicio:</TableCell>

            <TableCell align='center'>{hm.disneafatiga}</TableCell>

          </TableRow>


          <TableRow>
            <TableCell>Antecedentes de soplo cardiaco:</TableCell>

            <TableCell align='center'>{hm.antecedentesoplo}</TableCell>

          </TableRow>


          <TableRow>
            <TableCell>Antecedentes de Hipertensión Arterial:</TableCell>

            <TableCell align='center'>{hm.antecedentehipertension}</TableCell>

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