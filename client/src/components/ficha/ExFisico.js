import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Sales Data
function createData(id, Peso, Estatura, RitmoCardiaco, FrecuenciaCardiaca, Soplos, PulsosPerifericos, EstigmasMarfan, PresionArerial, FaringeAmigdalas,
  Pulmonar, Abdomen, Hernias, MusculoEsqueletico) {
  return {
    id, Peso, Estatura, RitmoCardiaco, FrecuenciaCardiaca, Soplos, PulsosPerifericos, EstigmasMarfan, PresionArerial,
    FaringeAmigdalas, Pulmonar, Abdomen, Hernias, MusculoEsqueletico
  };
}

const rows = [
  createData(0, 'Data Peso', 'Data Estatura', 'Data RitmoCardiaco', 'Data Frecuencia Cardiaca', 'Data Soplos', 'Data Pulsos Perifericos', 'Data Estigas de SdMarfán'
    , 'Data Presion Arterial', 'Data Faringe/Amigdalas', 'Data Pulmonar', 'Data Abdomen', 'Data Hernias', 'Data Musculo Esqueletico'),

];


export default function Orders(props) {
  const [state, setState] = useState(props);

  let hm = state.data.examenfisico;
  console.log('Fisico', hm)

  return (
    <React.Fragment>
      <Title>Examen Físico</Title>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell> <b> Interrogante Médica</b></TableCell>
            <TableCell align='center'><b>Resultado</b></TableCell>
          </TableRow>


          <TableRow>
            <TableCell>Ritmo Cardiaco:</TableCell>

            <TableCell align='center'>{hm.ritmocardiaco}</TableCell>

          </TableRow>


          <TableRow>
            <TableCell>Frecuencia Cardiaca</TableCell>

            <TableCell align='center'>{hm.frecuenciacardiaca}</TableCell>

          </TableRow>


          <TableRow>
            <TableCell>Soplos:</TableCell>

            <TableCell align='center'>{hm.soplos}</TableCell>
          </TableRow>


          <TableRow>
            <TableCell>Pulsos Periféricos:</TableCell>

            <TableCell align='center'>{hm.pulsosperifericos}</TableCell>
          </TableRow>


          <TableRow>
            <TableCell>Estigmas de Sd. Marfán:</TableCell>

            <TableCell align='center'>{hm.estigmas}</TableCell>

          </TableRow>

          <TableRow>
            <TableCell>Presión Arterial:</TableCell>

            <TableCell align='center'>{hm.presionarterial}</TableCell>

          </TableRow>


          <TableRow>
            <TableCell>Faringe / Amígdalas:</TableCell>

            <TableCell align='center'>{hm.faringe_amigdalas}</TableCell>

          </TableRow>


          <TableRow>
            <TableCell>Pulmonar:</TableCell>

            <TableCell align='center'>{hm.pulmonar}</TableCell>

          </TableRow>


          <TableRow>
            <TableCell>Abdomen:</TableCell>

            <TableCell align='center'>{hm.abdomen}</TableCell>

          </TableRow>

          <TableRow>
            <TableCell>Hernias:</TableCell>

            <TableCell align='center'>{hm.hernias}</TableCell>

          </TableRow>

          <TableRow>
            <TableCell>Musculo Esquelético:</TableCell>

            <TableCell align='center'>{hm.musculoesqueletico}</TableCell>

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
