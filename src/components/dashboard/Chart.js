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
function createData(id, enfermedadprevia, cirugia, hospitalizaciones, alergias, lesiones, medicamentos) {
  return { id, enfermedadprevia, cirugia, hospitalizaciones, alergias, lesiones, medicamentos  };
}

const rows = [
  createData(0, 'DataEnfermedad', 'DataCirugía','DataHospitalizaciones', 'DataAlergias', 'DataLesiones', 'DataMedicamentos/Suplementos'),

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
      <Title>Historia Médica Personal</Title>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell> <b> Interrogante Médica</b></TableCell>
            <TableCell><b>Resultado</b></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Enfermedades Previas:</TableCell>
            <TableCell>
            {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.enfermedadprevia}</TableCell>
            </TableRow>
          ))}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Cirugía:</TableCell>
            <TableCell>
            {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.cirugia}</TableCell>
            </TableRow>
          ))}
            </TableCell>
            </TableRow>
          <TableRow>
            <TableCell>Hospitalizaciones:</TableCell>
            <TableCell>
            {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.hospitalizaciones}</TableCell>
            </TableRow>
          ))}
          </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Alergias:</TableCell>
            <TableCell>
            {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.alergias}</TableCell>
            </TableRow>
          ))}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Lesiones graves previas (>1 mes sin jugar):</TableCell>
            <TableCell>
            {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.lesiones}</TableCell>
            </TableRow>
          ))}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Medicamentos / Suplementos:</TableCell>
            <TableCell > 
            {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.medicamentos}</TableCell>
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