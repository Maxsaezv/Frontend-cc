import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Sales Data
function createData(id, Peso, Estatura, RitmoCardiaco, FrecuenciaCardiaca, Soplos, PulsosPerifericos, EstigmasMarfan, PresionArerial, FaringeAmigdalas, 
  Pulmonar, Abdomen, Hernias, MusculoEsqueletico) {
  return { id, Peso, Estatura, RitmoCardiaco, FrecuenciaCardiaca, Soplos, PulsosPerifericos, EstigmasMarfan, PresionArerial,
  FaringeAmigdalas, Pulmonar, Abdomen, Hernias, MusculoEsqueletico  };
}

const rows = [
  createData(0, 'Data Peso', 'Data Estatura','Data RitmoCardiaco', 'Data Frecuencia Cardiaca', 'Data Soplos', 'Data Pulsos Perifericos', 'Data Estigas de SdMarfán'
  , 'Data Presion Arterial', 'Data Faringe/Amigdalas', 'Data Pulmonar', 'Data Abdomen', 'Data Hernias', 'Data Musculo Esqueletico'),

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
      <Title>Examen Físico</Title>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell> <b> Interrogante Médica</b></TableCell>
            <TableCell align= 'center'><b>Resultado</b></TableCell>
          </TableRow>


          <TableRow>
            <TableCell>Peso:</TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.Peso}</TableCell>
          ))}
          </TableRow>


          <TableRow>
            <TableCell>Estatura:</TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.Estatura}</TableCell>
          ))}
            </TableRow>


          <TableRow>
            <TableCell>Ritmo Cardiaco:</TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.RitmoCardiaco}</TableCell>
          ))}
          </TableRow>


          <TableRow>
            <TableCell>Frecuencia Cardiaca</TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.FrecuenciaCardiaca}</TableCell>
          ))}
          </TableRow>


          <TableRow>
            <TableCell>Soplos:</TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.Soplos}</TableCell>
          ))}
          </TableRow>


          <TableRow>
            <TableCell>Pulsos Periféricos:</TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.PulsosPerifericos}</TableCell>
          ))}
          </TableRow>


        <TableRow>
            <TableCell>Estigmas de Sd. Marfán:</TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.EstigmasMarfan}</TableCell>
          ))}
          </TableRow>

          <TableRow>
            <TableCell>Presión Arterial:</TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.PresionArerial}</TableCell>
          ))}
          </TableRow>


          <TableRow>
            <TableCell>Faringe / Amígdalas:</TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.FaringeAmigdalas}</TableCell>
          ))}
          </TableRow>


          <TableRow>
            <TableCell>Pulmonar:</TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.Pulmonar}</TableCell>
          ))}
          </TableRow>


          <TableRow>
            <TableCell>Abdomen:</TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.Abdomen}</TableCell>
          ))}
          </TableRow>

          <TableRow>
            <TableCell>Hernias:</TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.Hernias}</TableCell>
          ))}
          </TableRow>

          <TableRow>
            <TableCell>Musculo Esquelético:</TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.MusculoEsqueletico}</TableCell>
          ))}
          </TableRow>
          </TableHead>

        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.imedica}</TableCell>
              <TableCell>{row.resultado}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </React.Fragment>
  );
}
