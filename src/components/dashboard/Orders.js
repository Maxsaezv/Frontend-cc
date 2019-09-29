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
  createData(0, 'data Peso', 'Data Estatura','Data RitmoCardiaco', 'Data Frecuencia Cardiaca', 'Data Soplos', 'Data Pulsos Perifericos', 'Data Estigas de SdMarfán'
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
            <TableCell><b>Resultado</b></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Peso:</TableCell>
            <TableCell>
            {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.Peso}</TableCell>
            </TableRow>
          ))}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Estatura:</TableCell>
            <TableCell>
            {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.Estatura}</TableCell>
            </TableRow>
          ))}
            </TableCell>
            </TableRow>
          <TableRow>
            <TableCell>Ritmo Cardiaco:</TableCell>
            <TableCell>
            {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.RitmoCardiaco}</TableCell>
            </TableRow>
          ))}
          </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Frecuencia Cardiaca</TableCell>
            <TableCell>
            {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.FrecuenciaCardiaca}</TableCell>
            </TableRow>
          ))}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Soplos:</TableCell>
            <TableCell>
            {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.Soplos}</TableCell>
            </TableRow>
          ))}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Pulsos Periféricos:</TableCell>
            <TableCell > 
            {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.PulsosPerifericos}</TableCell>
            </TableRow>
          ))}
            </TableCell>
          </TableRow>

        <TableRow>
            <TableCell>Estigmas de Sd. Marfán:</TableCell>
            <TableCell>
            {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.EstigmasMarfan}</TableCell>
            </TableRow>
          ))}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Presión Arterial:</TableCell>
            <TableCell>
            {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.PresionArerial}</TableCell>
            </TableRow>
          ))}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Faringe / Amígdalas:</TableCell>
            <TableCell>
            {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.FaringeAmigdalas}</TableCell>
            </TableRow>
          ))}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Pulmonar:</TableCell>
            <TableCell>
            {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.Pulmonar}</TableCell>
            </TableRow>
          ))}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Abdomen:</TableCell>
            <TableCell>
            {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.Abdomen}</TableCell>
            </TableRow>
          ))}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Hernias:</TableCell>
            <TableCell>
            {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.Hernias}</TableCell>
            </TableRow>
          ))}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Musculo Esquelético:
            </TableCell>
            <TableCell>
            {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.MusculoEsqueletico}</TableCell>
            </TableRow>
          ))}
            </TableCell>
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
      <div className={classes.seeMore}>
        <Link color="primary" href="javascript:;">
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
